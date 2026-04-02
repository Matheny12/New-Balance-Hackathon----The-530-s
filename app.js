// ----------------------
// SHOE DATASET
// ----------------------
const shoes = [
  {
    name: "New Balance 550",
    tags: ["casual", "retro", "style", "low_activity"],
    image: "https://nb.scene7.com/is/image/NB/bb550pb1_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance 990v5",
    tags: ["comfort", "walking", "premium", "all_day"],
    image: "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance Fresh Foam 1080v12",
    tags: ["running", "comfort", "athletic", "performance"],
    image: "https://nb.scene7.com/is/image/NB/m1080b12_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance 574",
    tags: ["casual", "classic", "style", "everyday"],
    image: "https://nb.scene7.com/is/image/NB/ml574evb_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance 327",
    tags: ["trendy", "bold", "style", "streetwear"],
    image: "https://nb.scene7.com/is/image/NB/ms327fe_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance FuelCell Rebel v3",
    tags: ["running", "fast", "athletic", "performance"],
    image: "https://nb.scene7.com/is/image/NB/mfcxld3_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance 2002R",
    tags: ["comfort", "retro", "trendy", "all_day"],
    image: "https://nb.scene7.com/is/image/NB/m2002rda_nb_02_i?$pdpflexf2$"
  },
  {
    name: "New Balance Fresh Foam Roav",
    tags: ["comfort", "casual", "walking", "lightweight"],
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