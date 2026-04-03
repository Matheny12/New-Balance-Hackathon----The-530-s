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

// ----------------------
// GLOBAL VARIABLES
// ----------------------
let userTags = [];
let likedTags = [];
let filteredShoes = [];
let currentIndex = 0;

// ----------------------
// QUIZ START
// ----------------------
function startQuiz() {
  userTags = [];
  showQuestion1();
}

// ----------------------
// QUESTIONS
// ----------------------
function showQuestion1() {
  document.getElementById("app").innerHTML = `
    <h2>How do you get to class?</h2>
    <button onclick="selectAnswer('walk')">🚶 Walking</button>
    <button onclick="selectAnswer('run')">🏃 Running late</button>
    <button onclick="selectAnswer('chill')">😎 Chill</button>
  `;
}

function showQuestion2() {
  document.getElementById("app").innerHTML = `
    <h2>Pick your vibe</h2>
    <button onclick="selectAnswer('style')">🔥 Trendy</button>
    <button onclick="selectAnswer('minimal')">✨ Minimal</button>
    <button onclick="selectAnswer('athletic')">💪 Sporty</button>
  `;
}

function showQuestion3() {
  document.getElementById("app").innerHTML = `
    <h2>What matters most?</h2>
    <button onclick="selectAnswer('comfort')">😌 Comfort</button>
    <button onclick="selectAnswer('performance')">⚡ Performance</button>
    <button onclick="selectAnswer('style')">👟 Style</button>
  `;
}

// ----------------------
// HANDLE ANSWERS
// ----------------------
function selectAnswer(answer) {
  const tagMap = {
    walk: ["comfort", "walking", "all_day"],
    run: ["athletic", "performance"],
    chill: ["casual", "low_activity"],

    style: ["style", "trendy", "streetwear"],
    minimal: ["classic", "casual"],
    athletic: ["athletic", "performance"],

    comfort: ["comfort", "all_day"],
    performance: ["running", "performance"]
  };

  userTags.push(...(tagMap[answer] || []));

  // Move to next question
  if (userTags.length < 6) {
    if (userTags.length < 3) showQuestion2();
    else showQuestion3();
  } else {
    startSwipePhase();
  }
}

// ----------------------
// FILTER SHOES
// ----------------------
function getTopShoes() {
  return shoes
    .map(shoe => {
      let score = shoe.tags.filter(tag => userTags.includes(tag)).length;
      return { ...shoe, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

// ----------------------
// SWIPE PHASE
// ----------------------
function startSwipePhase() {
  filteredShoes = getTopShoes();
  currentIndex = 0;
  likedTags = [];
  showNextShoe();
}

function showNextShoe() {
  if (currentIndex >= filteredShoes.length) {
    showResult();
    return;
  }

  let shoe = filteredShoes[currentIndex];

  document.getElementById("app").innerHTML = `
    <h2>${shoe.name}</h2>
    <img src="${shoe.image}" width="250"><br/>
    <button onclick="likeShoe()">👍 Like</button>
    <button onclick="nextShoe()">👎 Skip</button>
  `;
}

function likeShoe() {
  likedTags.push(...filteredShoes[currentIndex].tags);
  currentIndex++;
  showNextShoe();
}

function nextShoe() {
  currentIndex++;
  showNextShoe();
}

// ----------------------
// FINAL RESULT
// ----------------------
function showResult() {
  let best = shoes
    .map(shoe => {
      let score = shoe.tags.filter(tag => likedTags.includes(tag)).length;
      return { ...shoe, score };
    })
    .sort((a, b) => b.score - a.score)[0];

  document.getElementById("app").innerHTML = `
    <h2>Your Perfect Shoe 👟</h2>
    <h3>${best.name}</h3>
    <img src="${best.image}" width="250"><br/>
    <p>This shoe matches your style and preferences!</p>
    <button onclick="startQuiz()">Try Again</button>
  `;
}