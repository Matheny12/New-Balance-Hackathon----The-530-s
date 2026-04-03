import os
import requests
import json
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

SEARCH_API_KEY = "3b98fbc57de1326aaf0c02fd03e419ec4f3b9ab3"
SAVE_FOLDER = "./shoe_data" 

if not os.path.exists(SAVE_FOLDER):
    os.makedirs(SAVE_FOLDER)

def get_shoe_links(query: str):
    """Searches Google for shoe product pages or reviews using Serper API."""
    url = "https://google.serper.dev/search"
    payload = {"q": f"New Balance {query} technical specifications OR review", "num": 3}
    headers = {'X-API-KEY': SEARCH_API_KEY, 'Content-Type': 'application/json'}
    
    response = requests.post(url, json=payload, headers=headers)
    results = response.json().get('organic', [])
    return [item['link'] for item in results]

def scrape_shoe_page(url, folder):
    """Scrapes a dynamic web page for shoe text and image data using Playwright."""
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
            
            page.goto(url, timeout=15000, wait_until="domcontentloaded")
            page.wait_for_timeout(2000)
            
            html = page.content()
            soup = BeautifulSoup(html, "html.parser")
            
            title = soup.title.string if soup.title else "Unknown_Shoe"
            safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '_')).rstrip().replace(" ", "_")
            
            for element in soup(["script", "style", "nav", "footer", "header"]):
                element.extract()
            text_content = soup.get_text(separator="\n", strip=True)
            
            img_url = ""
            og_img = soup.find("meta", property="og:image")
            if og_img:
                img_url = og_img.get("content", "")
            else:
                for img in soup.find_all("img"):
                    src = img.get("src") or img.get("data-src")
                    if src and ("http" in src) and ("logo" not in src.lower()):
                        img_url = src
                        break

            browser.close()
            file_path = os.path.join(folder, f"{safe_title}.json")
            data = {
                "url": url,
                "title": title,
                "image_url": img_url,
                "content": text_content[:5000]            
            }
            
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=4)
                
            print(f"Successfully scraped and saved: {safe_title}.json")
            
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")

def ai_query_web(q: str, fold: str = SAVE_FOLDER):
    """Main entry point for the RAG tool call."""
    linklist = get_shoe_links(q)
    n = 2
    for link in linklist:
        if n > 0:
            scrape_shoe_page(link, fold)
        n -= 1

if __name__ == "__main__":
    user_input = input("Shoe Finder: ")
    ai_query_web(user_input)
