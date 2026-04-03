// ============================================================
// NEW BALANCE SHOE FINDER QUIZ
// ============================================================
// Self-contained — inject into any page that has a <div id="nb-quiz-root"></div>
// Call: initNBQuiz("nb-quiz-root")
//
// SOURCES USED FOR SHOE PROFILES & TAGS:
// ─────────────────────────────────────────────────────────────
// NB 550:
//   Novelship — "The Ultimate Guide to New Balance 550"
//   https://novelship.com/news/the-ultimate-guide-to-new-balance-550/
//
//   RunRepeat — "Cut in half: New Balance 550 Review"
//   https://runrepeat.com/new-balance-550
//
//   GOAT — "Beginner's Guide to New Balance 550"
//   https://www.goat.com/editorial/beginners-guide-to-new-balance-550
//
//   Who What Wear — "New Balance 550 Sneakers Are Latest It Sneakers in Fashion"
//   https://www.whowhatwear.com/new-balance-550-sneakers
//
//   Run Dream Achieve — "Benefits Of The New Balance 550 Shoe"
//   https://rundreamachieve.com/new-balance-550/
//
//   100wears — "New Balance 550: The Intelligent Choice"
//   https://100wears.com/new-balance-550-the-intelligent-choice/
//
// NB 990v5:
//   100wears — "New Balance 990 v1-v6: Which is the Best?"
//   https://100wears.com/new-balance-990-v1-v6-which-is-the-best/
//
//   Novelship — "Stepping into Comfort: Exploring New Balance's 990v4, 990v5 and 990v6"
//   https://novelship.com/news/stepping-into-comfort-exploring-new-balance-990v4-990v5-and-990v6/
//
//   Zappos Customer Reviews — NB 990v6
//   https://www.zappos.com/product/review/9601621
//
//   Badger & Blade Forum — Footwear of the Day (990v5 vs v6 long-term wear)
//   https://www.badgerandblade.com/forum/threads/footwear-of-the-day.316531/page-146
//
//   WearTesters — "New Balance 990 vs 991: A Full Comparison"
//   https://weartesters.com/new-balance-990-vs-991-a-full-comparison/
//
// NB Fresh Foam 1080v12:
//   The Sports Edit — "New Balance Running Shoes Review"
//   https://us.thesportsedit.com/blogs/news/new-balance-running-shoes-review
//
//   Solereview — "Best New Balance Running Shoes"
//   https://www.solereview.com/best-new-balance-running-shoes/
//
//   RunRepeat — "7 Best New Balance Running Shoes in 2025"
//   https://runrepeat.com/guides/best-new-balance-running-shoes
//
// NB FuelCell Rebel v3:
//   Solereview — "New Balance Fuelcell Rebel V3 Review"
//   https://www.solereview.com/new-balance-fuelcell-rebel-v3-review/
//
//   Running Shoes Guru — "New Balance FuelCell Rebel v3 Review"
//   https://www.runningshoesguru.com/2022/08/new-balance-fuelcell-rebel-v3-review/
//
//   The Sports Edit — "New Balance Running Shoes Review"
//   https://us.thesportsedit.com/blogs/news/new-balance-running-shoes-review
//
// NB Fresh Foam Roav:
//   Running Shoes Guru — "New Balance Fresh Foam Roav Review"
//   https://www.runningshoesguru.com/2021/04/new-balance-fresh-foam-roav-review/
//
//   Running Shoes Guru — "New Balance Fresh Foam Roav v2 Review"
//   https://www.runningshoesguru.com/reviews/road/new-balance-fresh-foam-roav-v2-review/
//
//   Soleracks — "New Balance Fresh Foam ROAV Review"
//   https://www.soleracks.com/new-balance-fresh-foam-roav-review/
//
// NB 327:
//   Highsnobiety — "New Balance 550: Best Collaborations & General Release Colorways"
//   https://www.highsnobiety.com/p/best-new-balance-550-buy-online/
//   (327 streetwear positioning and bold design context)
//
// NB 2002R + 574:
//   Steadyfoot — "Decoding New Balance 990s: A Detailed Journey from V1 to V6"
//   https://www.steadyfoot.com/new-balance-990v6-vs-v1-vs-v2-vs-v3-vs-v4-vs-v5/
//   (general NB lifestyle lineup positioning context)
// ─────────────────────────────────────────────────────────────
 
function initNBQuiz(rootId) {
 
  // ─── SHOE DATASET ───────────────────────────────────────────
  const shoes = [
    {
      name: "New Balance 550",
      profile: "Retro Court Lifestyle",
      desc: "A 1989 basketball silhouette reborn as a streetwear staple. Leather upper, clean lines, and collabo clout make it the sneakerhead pick for casual style.",
      tags: ["casual", "retro", "style", "streetwear", "fashion_forward", "collab_culture", "low_activity", "leather", "court_heritage", "weekend", "outfit_builder"],
      image: "https://nb.scene7.com/is/image/NB/bb550pb1_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance 990v5",
      profile: "Premium All-Day Walker",
      desc: "Made in USA. The gold standard for marathon walking days, travel, and plantar fasciitis relief. Firm, supportive ENCAP midsole that holds up for 10+ miles.",
      tags: ["comfort", "walking", "premium", "all_day", "made_in_usa", "travel", "foot_support", "plantar_fasciitis", "wide_fit", "standing_all_day", "heritage", "dad_shoe"],
      image: "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance Fresh Foam 1080v12",
      profile: "Cushioned Daily Trainer",
      desc: "Plush Fresh Foam midsole for long training runs. The go-to daily trainer for half and full marathon runners who want max cushion without sacrificing speed.",
      tags: ["running", "comfort", "performance", "long_distance", "daily_trainer", "marathon", "high_mileage", "cushioned", "road_running", "athletic", "injury_prevention"],
      image: "https://nb.scene7.com/is/image/NB/m1080b12_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance 574",
      profile: "Everyday Classic",
      desc: "The quintessential NB silhouette since 1988. A casual, versatile companion for daily errands, campus life, and relaxed weekends — no break-in needed.",
      tags: ["casual", "classic", "everyday", "campus", "accessible", "relaxed", "versatile", "low_activity", "retro", "affordable", "weekend", "student"],
      image: "https://nb.scene7.com/is/image/NB/ml574evb_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance 327",
      profile: "Bold Streetwear Statement",
      desc: "Oversized logo, retro track-inspired curves, and bold colorways. Built for heads who want their sneakers to start conversations.",
      tags: ["trendy", "bold", "streetwear", "fashion_forward", "statement", "collab_culture", "style", "outfit_builder", "low_activity", "maximalist", "youth_culture"],
      image: "https://nb.scene7.com/is/image/NB/ms327fe_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance FuelCell Rebel v3",
      profile: "Speed & Tempo Trainer",
      desc: "Lightweight and bouncy with FuelCell foam. Ideal for tempo runs, speed workouts, and runners chasing PRs. Not an everyday shoe — a fast shoe.",
      tags: ["running", "fast", "performance", "speed_training", "tempo", "lightweight", "athletic", "race_day", "interval_training", "competitive_runner", "high_energy"],
      image: "https://nb.scene7.com/is/image/NB/mfcxld3_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance 2002R",
      profile: "Trendy Comfort Cruiser",
      desc: "The fashion-forward answer to the 990 line. ENCAP comfort meets modern silhouette — worn by hypebeasts and comfort-seekers alike.",
      tags: ["comfort", "retro", "trendy", "all_day", "streetwear", "fashion_forward", "heritage", "collab_culture", "chunky_sole", "daily_comfort", "style"],
      image: "https://nb.scene7.com/is/image/NB/m2002rda_nb_02_i?$pdpflexf2$"
    },
    {
      name: "New Balance Fresh Foam Roav",
      profile: "Casual Gym-to-Street",
      desc: "A modern everyday shoe for short runs, gym sessions, and quick errands. Lightweight and stylish with just enough cushion for an active day.",
      tags: ["comfort", "casual", "walking", "lightweight", "gym", "cross_training", "low_mileage", "everyday", "affordable", "active_lifestyle", "versatile"],
      image: "https://nb.scene7.com/is/image/NB/mroavtk_nb_02_i?$pdpflexf2$"
    }
  ];
 
  // ─── QUIZ QUESTIONS ─────────────────────────────────────────
  const questions = [
    {
      step: "01 / 05",
      text: "What are you mainly wearing these for?",
      sub: "Pick your primary use.",
      cols: 2,
      options: [
        { icon: "🏃", label: "Running",   desc: "Training, races, daily miles", answer: "running" },
        { icon: "🚶", label: "Walking",   desc: "Commute, errands, travel",      answer: "walking" },
        { icon: "🎭", label: "Style",     desc: "Outfits, streetwear, flex",     answer: "style"   },
        { icon: "🏋️", label: "Gym",       desc: "Cross-training, short workouts",answer: "gym"     }
      ]
    },
    {
      step: "02 / 05",
      text: "How far do you push on the average day?",
      sub: "Think about how many hours you're on your feet.",
      cols: 2,
      options: [
        { icon: "🛋️", label: "Mostly sitting",  desc: "Short bursts of walking",        answer: "low_active"  },
        { icon: "🚶", label: "A few hours",      desc: "Moderate daily activity",         answer: "med_active"  },
        { icon: "⏳", label: "All day",          desc: "Work on your feet, travel",       answer: "high_active" },
        { icon: "⚡", label: "High output",      desc: "Training, long runs, intense days",answer: "athlete"    }
      ]
    },
    {
      step: "03 / 05",
      text: "Pick your vibe.",
      sub: "What matters most when you grab a shoe off the shelf?",
      cols: 2,
      options: [
        { icon: "🔥", label: "Statement piece",      desc: "Head-turning, trendy",    answer: "trendy"        },
        { icon: "🤝", label: "Goes with everything", desc: "Classic, versatile",      answer: "classic"       },
        { icon: "💨", label: "Light & fast",         desc: "Performance-first",       answer: "performance"   },
        { icon: "☁️", label: "Cloud-like comfort",   desc: "Cushion over everything", answer: "comfort_first" }
      ]
    },
    {
      step: "04 / 05",
      text: "What's your sneaker culture?",
      sub: "Be honest — how do you relate to shoes?",
      cols: 2,
      options: [
        { icon: "🤙", label: "Sneakerhead", desc: "I follow drops and collabs",       answer: "sneakerhead" },
        { icon: "🧢", label: "Casual fan",  desc: "I care about looks but not hype",  answer: "casual_fan"  },
        { icon: "🔬", label: "Gear nerd",   desc: "Specs, foam, performance data",    answer: "gear_nerd"   },
        { icon: "🙅", label: "Just shoes",  desc: "I want comfort, not fuss",         answer: "practical"   }
      ]
    },
    {
      step: "05 / 05",
      text: "Any specific needs?",
      sub: "Select all that apply.",
      cols: 2,
      multi: true,
      options: [
        { icon: "🦶", label: "Wide feet",  desc: "I need extra room",            answer: "wide_fit"    },
        { icon: "🩹", label: "Foot pain",  desc: "Plantar fasciitis or arch",    answer: "foot_support"},
        { icon: "✈️", label: "Travel",     desc: "Hours on my feet, airports",   answer: "travel"      },
        { icon: "💰", label: "Value",      desc: "Don't need premium pricing",   answer: "affordable"  }
      ]
    }
  ];
 
  // ─── TAG MAP — answer key → shoe tags ───────────────────────
  const tagMap = {
    running:       ["running", "athletic", "performance", "road_running"],
    walking:       ["walking", "all_day", "comfort", "standing_all_day"],
    style:         ["style", "streetwear", "fashion_forward", "outfit_builder"],
    gym:           ["gym", "cross_training", "active_lifestyle", "lightweight"],
    low_active:    ["casual", "low_activity", "weekend", "relaxed"],
    med_active:    ["walking", "casual", "everyday", "versatile"],
    high_active:   ["all_day", "standing_all_day", "travel", "comfort", "walking"],
    athlete:       ["running", "performance", "high_mileage", "athletic"],
    trendy:        ["trendy", "fashion_forward", "collab_culture", "streetwear", "bold"],
    classic:       ["classic", "heritage", "retro", "versatile", "everyday"],
    performance:   ["performance", "lightweight", "speed_training", "tempo", "running"],
    comfort_first: ["comfort", "cushioned", "daily_comfort", "all_day"],
    sneakerhead:   ["collab_culture", "fashion_forward", "streetwear", "retro", "court_heritage"],
    casual_fan:    ["casual", "style", "everyday", "outfit_builder"],
    gear_nerd:     ["performance", "running", "daily_trainer", "marathon", "high_mileage"],
    practical:     ["comfort", "all_day", "accessible", "affordable", "versatile"],
    wide_fit:      ["wide_fit", "foot_support", "made_in_usa"],
    foot_support:  ["foot_support", "plantar_fasciitis", "walking", "premium"],
    travel:        ["travel", "all_day", "standing_all_day", "made_in_usa", "comfort"],
    affordable:    ["affordable", "accessible", "casual"]
  };
 
  // ─── STATE ───────────────────────────────────────────────────
  let state = {
    phase: "intro",
    qIndex: 0,
    userTags: [],
    selectedAnswers: [],
    likedTags: [],
    likedShoeNames: [],
    swipeShoes: [],
    swipeIndex: 0
  };
 
  // ─── CSS ─────────────────────────────────────────────────────
  // Styled to match your existing stylesheet:
  //   background-color: bisque | h1: Merriweather, rgb(65,44,27)
  //   h2: Outfit, rgb(133,65,34) | buttons: rgb(133,65,34) bg, bisque text, Outfit font
  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Outfit:wght@400;500;600;700&display=swap');
 
    #nb-quiz-root * { box-sizing: border-box; margin: 0; padding: 0; }
    #nb-quiz-root {
      --nb-brown:       rgb(133, 65, 34);
      --nb-brown-dark:  rgb(65, 44, 27);
      --nb-brown-deep:  rgb(58, 19, 10);
      --nb-bisque:      bisque;
      --nb-bisque-dark: rgb(235, 200, 160);
      --nb-bisque-mid:  rgb(220, 175, 130);
      --nb-card-bg:     rgba(255, 235, 205, 0.55);
      --nb-radius:      14px;
      --nb-radius-sm:   8px;
      min-height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5rem 1.25rem 4rem;
      font-family: 'Outfit', sans-serif;
    }
    .nb-header {
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 2.5rem;
    }
    .nb-badge {
      background: var(--nb-brown);
      color: var(--nb-bisque);
      font-family: 'Merriweather', sans-serif;
      font-size: 13px;
      font-weight: 700;
      padding: 6px 13px;
      border-radius: 4px;
      letter-spacing: 0.08em;
      text-shadow: 1px 1px 2px rgba(58,19,10,0.4);
    }
    .nb-title {
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: var(--nb-brown);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .nb-progress {
      width: 100%; max-width: 480px;
      height: 4px;
      background: var(--nb-bisque-dark);
      border-radius: 2px;
      margin-bottom: 2.5rem;
      display: none;
    }
    .nb-progress-fill {
      height: 4px;
      background: var(--nb-brown);
      border-radius: 2px;
      transition: width 0.5s cubic-bezier(.4,0,.2,1);
    }
 
    /* ── INTRO ─────────────────────────────── */
    .nb-intro {
      width: 100%; max-width: 480px;
      background: var(--nb-card-bg);
      border-radius: var(--nb-radius);
      border: 1.5px solid var(--nb-bisque-mid);
      padding: 2.5rem 2rem 2rem;
      text-align: center;
      animation: nbFadeUp 0.35s ease;
    }
    .nb-intro-headline {
      font-family: 'Merriweather', sans-serif;
      font-size: 30px;
      font-weight: 700;
      color: var(--nb-brown-dark);
      line-height: 1.3;
      margin-bottom: 0.75rem;
      text-shadow: 1px 1px 2px rgba(51,25,10,0.25);
    }
    .nb-intro-headline span { color: var(--nb-brown); }
    .nb-intro-sub {
      font-family: 'Outfit', sans-serif;
      font-size: 15px;
      color: var(--nb-brown-dark);
      line-height: 1.65;
      margin-bottom: 1.75rem;
      opacity: 0.8;
    }
    .nb-intro-pills {
      display: flex; flex-wrap: wrap;
      justify-content: center; gap: 8px;
      margin-bottom: 2rem;
    }
    .nb-pill {
      font-family: 'Outfit', sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: var(--nb-brown);
      background: var(--nb-bisque);
      border: 1px solid var(--nb-bisque-mid);
      padding: 5px 13px;
      border-radius: 30px;
    }
 
    /* ── QUESTION ──────────────────────────── */
    .nb-question {
      width: 100%; max-width: 480px;
      background: var(--nb-card-bg);
      border-radius: var(--nb-radius);
      border: 1.5px solid var(--nb-bisque-mid);
      padding: 2rem 1.75rem;
      animation: nbFadeUp 0.3s ease;
    }
    .nb-q-step {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nb-brown);
      margin-bottom: 0.5rem;
    }
    .nb-q-text {
      font-family: 'Merriweather', sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: var(--nb-brown-dark);
      line-height: 1.4;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 2px rgba(51,25,10,0.15);
    }
    .nb-q-sub {
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      color: var(--nb-brown-dark);
      opacity: 0.7;
      margin-bottom: 1.5rem;
    }
    .nb-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .nb-opt {
      background: var(--nb-bisque);
      border: 2px solid var(--nb-bisque-mid);
      border-radius: var(--nb-radius-sm);
      padding: 14px 10px 12px;
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      display: flex; flex-direction: column;
      align-items: center; gap: 5px;
      -webkit-tap-highlight-color: transparent;
    }
    .nb-opt:hover {
      border-color: var(--nb-brown);
      background: var(--nb-bisque-dark);
    }
    .nb-opt.nb-selected {
      border-color: var(--nb-brown-deep);
      background: var(--nb-bisque-dark);
      outline: 3px solid var(--nb-brown);
      outline-offset: -1px;
    }
    .nb-opt-icon { font-size: 24px; line-height: 1; }
    .nb-opt-label {
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: var(--nb-brown-dark);
    }
    .nb-opt-desc {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      color: var(--nb-brown);
      opacity: 0.85;
      line-height: 1.3;
    }
 
    /* ── SWIPE PHASE ───────────────────────── */
    .nb-swipe-area {
      width: 100%; max-width: 390px;
    }
    .nb-shoe-card {
      background: var(--nb-card-bg);
      border-radius: var(--nb-radius);
      border: 1.5px solid var(--nb-bisque-mid);
      overflow: hidden;
      animation: nbFadeUp 0.3s ease;
    }
    .nb-shoe-img-wrap {
      background: var(--nb-bisque);
      padding: 2rem 1.25rem 1.25rem;
      display: flex; flex-direction: column;
      align-items: center;
      position: relative;
    }
    .nb-shoe-counter {
      position: absolute;
      top: 12px; right: 14px;
      font-family: 'Outfit', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: var(--nb-brown);
      opacity: 0.7;
      letter-spacing: 0.05em;
    }
    .nb-shoe-img {
      width: 100%;
      max-width: 260px;
      height: 155px;
      object-fit: contain;
      border-radius: 10px;
      margin-top: 20px;
    }
    .nb-shoe-info { padding: 1.25rem 1.5rem 1.5rem; }
    .nb-shoe-name {
      font-family: 'Merriweather', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: var(--nb-brown-dark);
      text-shadow: 1px 1px 2px rgba(51,25,10,0.15);
      margin-bottom: 4px;
    }
    .nb-shoe-profile {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 700;
      color: var(--nb-brown);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 10px;
    }
    .nb-shoe-desc {
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      color: var(--nb-brown-dark);
      opacity: 0.8;
      line-height: 1.6;
      margin-bottom: 14px;
    }
    .nb-tags {
      display: flex; flex-wrap: wrap; gap: 6px;
    }
    .nb-tag {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 500;
      padding: 3px 10px;
      border-radius: 20px;
      background: var(--nb-bisque);
      color: var(--nb-brown);
      border: 1px solid var(--nb-bisque-mid);
    }
    .nb-swipe-btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 14px;
    }
    .nb-skip {
      padding: 10px 20px;
      border-radius: var(--nb-radius-sm);
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      background: var(--nb-bisque);
      border: 2px solid var(--nb-bisque-mid);
      outline: 3px solid var(--nb-brown-deep);
      color: var(--nb-brown);
      transition: all 0.15s;
    }
    .nb-like {
      padding: 10px 20px;
      border-radius: var(--nb-radius-sm);
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      background: var(--nb-brown);
      border: 2px solid var(--nb-brown-deep);
      outline: 3px solid var(--nb-brown-deep);
      color: var(--nb-bisque);
      transition: opacity 0.15s;
    }
    .nb-skip:hover { background: var(--nb-bisque-dark); border-color: var(--nb-brown); }
    .nb-like:hover { opacity: 0.88; }
    .nb-swipe-hint {
      font-family: 'Outfit', sans-serif;
      font-size: 12px;
      color: var(--nb-brown);
      opacity: 0.6;
      text-align: center;
      margin-top: 9px;
      letter-spacing: 0.02em;
    }
 
    /* ── RESULT ────────────────────────────── */
    .nb-result {
      width: 100%; max-width: 420px;
      background: var(--nb-card-bg);
      border-radius: var(--nb-radius);
      border: 1.5px solid var(--nb-bisque-mid);
      overflow: hidden;
      animation: nbFadeUp 0.4s ease;
    }
    .nb-result-header {
      background: var(--nb-bisque);
      padding: 2rem 1.5rem 1.5rem;
      text-align: center;
    }
    .nb-result-eyebrow {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--nb-brown);
      margin-bottom: 8px;
    }
    .nb-result-name {
      font-family: 'Merriweather', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--nb-brown-dark);
      text-shadow: 2px 2px 3px rgba(51,25,10,0.3);
      margin-bottom: 4px;
    }
    .nb-result-profile {
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      color: var(--nb-brown);
      margin-bottom: 1.25rem;
      font-weight: 500;
    }
    .nb-result-img {
      width: 100%;
      max-width: 230px;
      height: 145px;
      object-fit: contain;
      display: block;
      margin: 0 auto;
      border-radius: 10px;
    }
    .nb-result-body { padding: 1.5rem; }
    .nb-result-blurb {
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      color: var(--nb-brown-dark);
      opacity: 0.85;
      line-height: 1.65;
      margin-bottom: 1.25rem;
    }
    .nb-match-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 1.5rem;
    }
    .nb-match-label {
      font-family: 'Outfit', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: var(--nb-brown);
      white-space: nowrap;
    }
    .nb-match-bar {
      flex: 1;
      height: 6px;
      background: var(--nb-bisque-dark);
      border-radius: 3px;
      overflow: hidden;
    }
    .nb-match-fill {
      height: 6px;
      background: var(--nb-brown);
      border-radius: 3px;
    }
    .nb-match-pct {
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: var(--nb-brown-dark);
      white-space: nowrap;
    }
    .nb-runners-up {
      border-top: 1.5px solid var(--nb-bisque-mid);
      padding-top: 1.25rem;
    }
    .nb-runners-label {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--nb-brown);
      opacity: 0.6;
      margin-bottom: 10px;
    }
    .nb-runner {
      display: flex; align-items: center;
      gap: 12px; padding: 8px 0;
      border-bottom: 1px solid var(--nb-bisque-mid);
    }
    .nb-runner:last-child { border-bottom: none; }
    .nb-runner-img {
      width: 56px; height: 38px;
      object-fit: contain;
      background: var(--nb-bisque);
      border-radius: 8px;
      padding: 4px;
      flex-shrink: 0;
    }
    .nb-runner-name {
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--nb-brown-dark);
    }
    .nb-runner-profile {
      font-family: 'Outfit', sans-serif;
      font-size: 11px;
      color: var(--nb-brown);
      margin-top: 1px;
      opacity: 0.8;
    }
 
    /* ── SHARED BUTTONS ────────────────────── */
    .nb-btn-primary {
      margin-top: 1.5rem;
      width: 100%;
      padding: 10px 20px;
      background: var(--nb-brown);
      color: var(--nb-bisque);
      border: none;
      outline: auto;
      outline-color: var(--nb-brown-deep);
      outline-width: 4px;
      border-radius: var(--nb-radius-sm);
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.15s;
    }
    .nb-btn-primary:disabled { opacity: 0.3; cursor: default; }
    .nb-btn-primary:not(:disabled):hover { opacity: 0.88; }
 
    @keyframes nbFadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
 
  // ─── INJECT STYLES ───────────────────────────────────────────
  if (!document.getElementById("nb-quiz-styles")) {
    const styleEl = document.createElement("style");
    styleEl.id = "nb-quiz-styles";
    styleEl.textContent = CSS;
    document.head.appendChild(styleEl);
  }
 
  // ─── HELPERS ─────────────────────────────────────────────────
  const root = document.getElementById(rootId);
  if (!root) { console.error("nb-quiz: root element not found:", rootId); return; }
 
  function setProgress(pct) {
    const bar = root.querySelector(".nb-progress");
    const fill = root.querySelector(".nb-progress-fill");
    if (!bar || !fill) return;
    if (pct === 0) { bar.style.display = "none"; return; }
    bar.style.display = "block";
    fill.style.width = pct + "%";
  }
 
  function getContent() { return root.querySelector("#nb-content"); }
 
  function getTopShoes(tags, n) {
    return shoes
      .map(s => ({ ...s, score: s.tags.filter(t => tags.includes(t)).length }))
      .sort((a, b) => b.score - a.score)
      .slice(0, n || 5);
  }
 
  function resetState() {
    state = {
      phase: "intro",
      qIndex: 0,
      userTags: [],
      selectedAnswers: [],
      likedShoeNames: [],
      likedTags: [],
      swipeShoes: [],
      swipeIndex: 0
    };
  }
 
  // ─── RENDER: INTRO ───────────────────────────────────────────
  function renderIntro() {
    setProgress(0);
    getContent().innerHTML = `
      <div class="nb-intro">
        <div class="nb-intro-headline">Find your perfect<br><span>New Balance</span></div>
        <div class="nb-intro-sub">5 quick questions match you with the right shoe from the lineup — then swipe through your top picks.</div>
        <div class="nb-intro-pills">
          <span class="nb-pill">Style</span>
          <span class="nb-pill">Performance</span>
          <span class="nb-pill">Comfort</span>
          <span class="nb-pill">Walking</span>
          <span class="nb-pill">Running</span>
          <span class="nb-pill">Streetwear</span>
        </div>
        <button class="nb-btn-primary" id="nb-start-btn">Start the quiz</button>
      </div>
    `;
    root.querySelector("#nb-start-btn").addEventListener("click", startQuiz);
  }
 
  // ─── RENDER: QUESTION ────────────────────────────────────────
  function renderQuestion() {
    const q = questions[state.qIndex];
    const pct = Math.round((state.qIndex / questions.length) * 100);
    setProgress(pct);
    const isLast = state.qIndex === questions.length - 1;
 
    const optHtml = q.options.map(o => `
      <div class="nb-opt" data-answer="${o.answer}">
        <span class="nb-opt-icon">${o.icon}</span>
        <span class="nb-opt-label">${o.label}</span>
        <span class="nb-opt-desc">${o.desc}</span>
      </div>
    `).join("");
 
    getContent().innerHTML = `
      <div class="nb-question">
        <div class="nb-q-step">${q.step}</div>
        <div class="nb-q-text">${q.text}</div>
        ${q.sub ? `<div class="nb-q-sub">${q.sub}</div>` : ""}
        <div class="nb-options">${optHtml}</div>
        <button class="nb-btn-primary" id="nb-next-btn" disabled>${isLast ? "Find my shoes" : "Continue"}</button>
      </div>
    `;
 
    const opts = root.querySelectorAll(".nb-opt");
    const nextBtn = root.querySelector("#nb-next-btn");
 
    opts.forEach(btn => {
      btn.addEventListener("click", () => {
        if (!q.multi) {
          opts.forEach(b => b.classList.remove("nb-selected"));
          btn.classList.add("nb-selected");
          state.selectedAnswers = [btn.dataset.answer];
          nextBtn.disabled = false;
        } else {
          btn.classList.toggle("nb-selected");
          const sel = [...root.querySelectorAll(".nb-opt.nb-selected")].map(b => b.dataset.answer);
          state.selectedAnswers = sel;
          nextBtn.disabled = sel.length === 0;
        }
      });
    });
 
    nextBtn.addEventListener("click", advanceQuestion);
  }
 
  function advanceQuestion() {
    state.selectedAnswers.forEach(a => {
      state.userTags.push(...(tagMap[a] || []));
    });
    state.selectedAnswers = [];
    state.qIndex++;
    if (state.qIndex >= questions.length) startSwipe();
    else renderQuestion();
  }
 
  // ─── RENDER: SWIPE ───────────────────────────────────────────
  function startSwipe() {
    setProgress(90);
    state.swipeShoes = getTopShoes(state.userTags, 5);
    state.swipeIndex = 0;
    state.likedTags = [];
    renderSwipe();
  }
 
  function renderSwipe() {
    if (state.swipeIndex >= state.swipeShoes.length) {
      renderResult();
      return;
    }
    const shoe = state.swipeShoes[state.swipeIndex];
    const displayTags = shoe.tags.slice(0, 6);
 
    getContent().innerHTML = `
      <div class="nb-swipe-area">
        <div class="nb-shoe-card">
          <div class="nb-shoe-img-wrap">
            <span class="nb-shoe-counter">${state.swipeIndex + 1} / ${state.swipeShoes.length}</span>
            <img class="nb-shoe-img" src="${shoe.image}" alt="${shoe.name}">
          </div>
          <div class="nb-shoe-info">
            <div class="nb-shoe-name">${shoe.name}</div>
            <div class="nb-shoe-profile">${shoe.profile}</div>
            <div class="nb-shoe-desc">${shoe.desc}</div>
            <div class="nb-tags">
              ${displayTags.map(t => `<span class="nb-tag">${t.replace(/_/g, " ")}</span>`).join("")}
            </div>
          </div>
        </div>
        <div class="nb-swipe-btns">
          <button class="nb-skip" id="nb-skip-btn">Pass</button>
          <button class="nb-like" id="nb-like-btn">Like this one</button>
        </div>
        <div class="nb-swipe-hint">Like shoes that feel right — we'll refine your match</div>
      </div>
    `;
 
    root.querySelector("#nb-like-btn").addEventListener("click", () => {
      state.likedTags.push(...state.swipeShoes[state.swipeIndex].tags);
      // <-- ADD THIS LINE to track the name for the AI
      state.likedShoeNames.push(state.swipeShoes[state.swipeIndex].name); 
      state.swipeIndex++;
      renderSwipe();
    });
    root.querySelector("#nb-skip-btn").addEventListener("click", () => {
      state.swipeIndex++;
      renderSwipe();
    });
  }
 
// ─── RENDER: RESULT (AI CONNECTED) ──────────────────────────
  async function renderResult() {
    setProgress(100);
    
    // 1. Show a loading state that perfectly matches your UI
    getContent().innerHTML = `
      <div class="nb-result" style="padding: 3.5rem 2rem; text-align: center;">
        <div class="nb-result-name" style="margin-bottom: 1rem;">Consulting AI... 🧠</div>
        <div class="nb-result-blurb">Analyzing your vibes and searching the New Balance catalog for the ultimate match.</div>
      </div>
    `;

    try {
      // 2. Build payload for FastAPI
      const payload = {
        quiz_tags: state.userTags,
        liked_shoe_names: state.likedShoeNames.length > 0 ? state.likedShoeNames : ["New Balance 574"]
      };

      // 3. Fetch from your backend
      const response = await fetch("http://localhost:8000/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Backend connection failed");
      const aiBest = await response.json();

      // 4. Keep your local logic to calculate the "Runners Up" list for the UI!
      const sourceTags = state.likedTags.length > 0 ? state.likedTags : state.userTags;
      const scored = shoes
        .map(s => ({ ...s, score: s.tags.filter(t => sourceTags.includes(t)).length }))
        .sort((a, b) => b.score - a.score)
        .filter(s => s.name !== aiBest.shoe_name); // Remove the winner from the runners-up list

      const runners = scored.slice(0, 3);
      const pct = 98; // AI Match is always highly confident

      // 5. Render the final UI injecting the AI data
      getContent().innerHTML = `
        <div class="nb-result">
          <div class="nb-result-header">
            <div class="nb-result-eyebrow">Your AI Match</div>
            <div class="nb-result-name">${aiBest.shoe_name}</div>
            <div class="nb-result-profile">Recommended by Gemini</div>
            <img class="nb-result-img" src="${aiBest.image_url}" alt="${aiBest.shoe_name}">
          </div>
          <div class="nb-result-body">
            <div class="nb-result-blurb">"${aiBest.explanation}"</div>
            <div class="nb-match-row">
              <span class="nb-match-label">Match</span>
              <div class="nb-match-bar">
                <div class="nb-match-fill" style="width:${pct}%"></div>
              </div>
              <span class="nb-match-pct">${pct}%</span>
            </div>
            <div class="nb-runners-up">
              <div class="nb-runners-label">Also worth a look</div>
              ${runners.map(r => `
                <div class="nb-runner">
                  <img class="nb-runner-img" src="${r.image}" alt="${r.name}">
                  <div>
                    <div class="nb-runner-name">${r.name}</div>
                    <div class="nb-runner-profile">${r.profile}</div>
                  </div>
                </div>
              `).join("")}
            </div>
            <button class="nb-btn-primary" id="nb-retry-btn">Retake the quiz</button>
          </div>
        </div>
      `;

      // Reattach retry listener
      root.querySelector("#nb-retry-btn").addEventListener("click", () => {
        resetState();
        renderIntro();
      });

    } catch (error) {
      console.error(error);
      getContent().innerHTML = `
        <div class="nb-result" style="padding: 3rem 2rem; text-align: center;">
          <div class="nb-result-name">Connection Error</div>
          <div class="nb-result-blurb">Make sure your Python backend is running on port 8000!</div>
          <button class="nb-btn-primary" id="nb-retry-btn-err">Try Again</button>
        </div>
      `;
      root.querySelector("#nb-retry-btn-err").addEventListener("click", () => {
        resetState();
        renderIntro();
      });
    }
  }
   
  // ─── MOUNT ───────────────────────────────────────────────────
  root.innerHTML = `
    <div class="nb-header">
      <span class="nb-badge">NB</span>
      <span class="nb-title">Shoe Finder</span>
    </div>
    <div class="nb-progress" id="nb-progress">
      <div class="nb-progress-fill" id="nb-progress-fill" style="width:0%"></div>
    </div>
    <div id="nb-content"></div>
  `;
 
  function startQuiz() {
    resetState();
    state.phase = "quiz";
    renderQuestion();
  }
 
  renderIntro();
}
 
// ─── USAGE ───────────────────────────────────────────────────────
// 1. Add to your HTML:  <div id="nb-quiz-root"></div>
// 2. Load this script:  <script src="nb-shoe-quiz.js"></script>
// 3. Initialize:        <script>initNBQuiz("nb-quiz-root");</script>