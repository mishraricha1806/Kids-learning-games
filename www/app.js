const games = {
  tiny: [
    {
      id: "color-pop",
      title: "Color Pop",
      category: "Colors",
      icon: "C",
      color: "#ef6f6c",
      meta: "Color names and choice confidence",
      parent: "Toddlers practice color recognition with large targets, cheerful feedback, and quick wins.",
      type: "colors"
    },
    {
      id: "shape-garden",
      title: "Shape Garden",
      category: "Shapes",
      icon: "S",
      color: "#2eb872",
      meta: "Circles, squares, stars, and triangles",
      parent: "Early learners compare shapes visually and build vocabulary through repeated matching.",
      type: "shapes"
    },
    {
      id: "count-bubbles",
      title: "Count Bubbles",
      category: "Numbers",
      icon: "1",
      color: "#3f8cff",
      meta: "Counting from 1 to 5",
      parent: "Short counting rounds support one-to-one correspondence without feeling like a worksheet.",
      type: "count"
    },
    {
      id: "animal-sounds",
      title: "Animal Sounds",
      category: "Listening",
      icon: "A",
      color: "#00a6a6",
      meta: "Match animals to playful sounds",
      parent: "Listening games build attention, vocabulary, and sound discrimination for very young learners.",
      type: "animals"
    },
    {
      id: "big-small",
      title: "Big or Small",
      category: "Compare",
      icon: "B",
      color: "#f5a623",
      meta: "Compare sizes and words",
      parent: "Simple comparison play helps children understand size language like bigger, smaller, tall, and short.",
      type: "sizes"
    },
    {
      id: "feeling-faces",
      title: "Feeling Faces",
      category: "Emotions",
      icon: "F",
      color: "#8067dc",
      meta: "Name happy, sad, calm, and surprised",
      parent: "Emotion naming supports social language and gives children words for what they notice and feel.",
      type: "feelings"
    },
    {
      id: "shape-catcher",
      title: "Shape Catcher",
      category: "Action",
      icon: "G",
      color: "#2eb872",
      meta: "Catch the falling color or shape",
      parent: "A moving catch game keeps toddlers engaged while practicing color and shape recognition.",
      type: "shapeCatcher"
    },
    {
      id: "star-tap",
      title: "Star Tap",
      category: "Action",
      icon: "*",
      color: "#f5a623",
      meta: "Tap and count glowing stars",
      parent: "A gentle animated counting game helps toddlers practice counting with satisfying visual feedback.",
      type: "starTap"
    },
    {
      id: "bubble-garden",
      title: "Bubble Garden",
      category: "Quest",
      icon: "Q",
      color: "#3f8cff",
      meta: "Pop 10 target-color bubbles",
      parent: "A longer color quest gives toddlers repeated practice while the progress bar keeps them motivated.",
      type: "bubbleGarden"
    }
  ],
  little: [
    {
      id: "letter-lift",
      title: "Letter Lift",
      category: "Alphabet",
      icon: "A",
      color: "#8067dc",
      meta: "Uppercase letters and sounds",
      parent: "Preschoolers connect letters with simple words and hear each prompt read aloud.",
      type: "letters"
    },
    {
      id: "pattern-train",
      title: "Pattern Train",
      category: "Logic",
      icon: "P",
      color: "#f5a623",
      meta: "Finish the pattern",
      parent: "Pattern play strengthens prediction, attention, and early math reasoning.",
      type: "patterns"
    },
    {
      id: "memory-match",
      title: "Memory Match",
      category: "Focus",
      icon: "M",
      color: "#00a6a6",
      meta: "Match pairs and remember locations",
      parent: "This gentle memory game encourages focus, turn-taking, and visual recall.",
      type: "memory"
    },
    {
      id: "rhyme-time",
      title: "Rhyme Time",
      category: "Reading",
      icon: "R",
      color: "#ef6f6c",
      meta: "Find words that rhyme",
      parent: "Rhyming strengthens phonological awareness, a core early reading skill.",
      type: "rhymes"
    },
    {
      id: "odd-one-out",
      title: "Odd One Out",
      category: "Thinking",
      icon: "O",
      color: "#2eb872",
      meta: "Spot the item that does not belong",
      parent: "Sorting by shared traits builds flexible thinking, vocabulary, and visual reasoning.",
      type: "odd"
    },
    {
      id: "number-trace",
      title: "Number Path",
      category: "Numbers",
      icon: "N",
      color: "#3f8cff",
      meta: "Tap numbers in order",
      parent: "Ordered tapping practices number sequence, attention, and motor planning.",
      type: "trace"
    },
    {
      id: "letter-balloons",
      title: "Letter Balloons",
      category: "Action",
      icon: "L",
      color: "#ef6f6c",
      meta: "Pop the right falling letter",
      parent: "Falling letter play adds movement while practicing letter recognition and quick visual scanning.",
      type: "letterBalloons"
    },
    {
      id: "number-muncher",
      title: "Number Muncher",
      category: "Action",
      icon: "U",
      color: "#2eb872",
      meta: "Feed the monster the right number",
      parent: "Moving number snacks make counting and simple addition feel playful and energetic.",
      type: "numberMuncher"
    },
    {
      id: "alphabet-train",
      title: "Alphabet Train",
      category: "Action",
      icon: "T",
      color: "#3f8cff",
      meta: "Pick the next letter car",
      parent: "The moving train format adds anticipation while children practice alphabet order.",
      type: "alphabetTrain"
    },
    {
      id: "path-quest",
      title: "Path Quest",
      category: "Quest",
      icon: "Q",
      color: "#8067dc",
      meta: "Follow 12 stepping stones",
      parent: "A longer ordered-path game builds sequencing, attention, and persistence through a complete route.",
      type: "pathQuest"
    }
  ],
  big: [
    {
      id: "math-quest",
      title: "Math Quest",
      category: "Math",
      icon: "+",
      color: "#3f8cff",
      meta: "Addition and subtraction",
      parent: "Kids solve bite-size math problems with visual number support and no time pressure.",
      type: "math"
    },
    {
      id: "word-builder",
      title: "Word Builder",
      category: "Reading",
      icon: "W",
      color: "#ef6f6c",
      meta: "Build simple words",
      parent: "Word building supports spelling, phonics, and independent reading confidence.",
      type: "words"
    },
    {
      id: "brain-sort",
      title: "Brain Sort",
      category: "Science",
      icon: "B",
      color: "#2eb872",
      meta: "Sort living and non-living things",
      parent: "Older children practice categorizing, comparing, and explaining real-world ideas.",
      type: "sort"
    },
    {
      id: "clock-smart",
      title: "Clock Smart",
      category: "Time",
      icon: "T",
      color: "#8067dc",
      meta: "Read simple clock times",
      parent: "Time games give older kids practical confidence with daily routines and schedules.",
      type: "clock"
    },
    {
      id: "skip-hop",
      title: "Skip Hop",
      category: "Math",
      icon: "S",
      color: "#f5a623",
      meta: "Skip count by 2, 5, and 10",
      parent: "Skip counting prepares children for multiplication patterns and stronger number sense.",
      type: "skip"
    },
    {
      id: "vocab-voyage",
      title: "Vocab Voyage",
      category: "Words",
      icon: "V",
      color: "#00a6a6",
      meta: "Choose synonyms and meanings",
      parent: "Vocabulary challenges grow reading comprehension without long passages or pressure.",
      type: "vocab"
    },
    {
      id: "spelling-balloons",
      title: "Spelling Balloons",
      category: "Spelling",
      icon: "Z",
      color: "#ef6f6c",
      meta: "Pop letters to spell words",
      parent: "This action spelling game keeps older kids engaged while reinforcing letter order and word memory.",
      type: "spellingBalloons"
    },
    {
      id: "rocket-math",
      title: "Rocket Math",
      category: "Action",
      icon: "R",
      color: "#8067dc",
      meta: "Solve to launch the rocket",
      parent: "Animated launches reward correct math answers and make practice feel like progress.",
      type: "rocketMath"
    },
    {
      id: "word-comets",
      title: "Word Comets",
      category: "Action",
      icon: "C",
      color: "#00a6a6",
      meta: "Catch the correct meaning word",
      parent: "Fast-moving word choices make vocabulary practice feel active while still building comprehension.",
      type: "wordComets"
    },
    {
      id: "quest-island",
      title: "Quest Island",
      category: "Quest",
      icon: "I",
      color: "#f5a623",
      meta: "Collect 6 gems with mixed challenges",
      parent: "A multi-step learning quest blends math, vocabulary, spelling, and logic into a longer play session.",
      type: "questIsland"
    }
  ]
};

const letterWords = [
  ["A", "apple"], ["B", "ball"], ["C", "cat"], ["D", "drum"], ["E", "egg"], ["F", "fish"],
  ["G", "goat"], ["H", "hat"], ["I", "igloo"], ["J", "jam"], ["K", "kite"], ["L", "leaf"],
  ["M", "moon"], ["N", "nest"], ["O", "orange"], ["P", "pencil"], ["Q", "queen"], ["R", "rain"],
  ["S", "sun"], ["T", "tiger"], ["U", "umbrella"], ["V", "van"], ["W", "water"], ["X", "box"],
  ["Y", "yo-yo"], ["Z", "zebra"]
];

const spellingWords = [
  "SUN", "CAT", "DOG", "HAT", "FISH", "BOOK", "TREE", "STAR", "MOON", "RAIN",
  "CAKE", "BIRD", "FROG", "GOAT", "LION", "DUCK", "BALL", "MILK", "SHIP", "CLOUD",
  "PLANT", "SMILE", "TRAIN", "CHAIR", "APPLE", "HOUSE", "WATER", "TIGER", "ROBOT", "PIZZA"
];

const palettes = [
  { name: "red", value: "#ef6f6c" },
  { name: "blue", value: "#3f8cff" },
  { name: "green", value: "#2eb872" },
  { name: "yellow", value: "#f5c542" }
];

const shapes = [
  { name: "circle", svg: '<circle cx="50" cy="50" r="34" fill="#3f8cff"></circle>' },
  { name: "square", svg: '<rect x="18" y="18" width="64" height="64" rx="8" fill="#ef6f6c"></rect>' },
  { name: "triangle", svg: '<path d="M50 14 88 84H12Z" fill="#2eb872"></path>' },
  { name: "star", svg: '<path d="m50 10 11 25 27 3-20 18 6 27-24-14-24 14 6-27-20-18 27-3Z" fill="#f5c542"></path>' }
];

const state = {
  age: "tiny",
  gameId: "color-pop",
  stars: 0,
  totalStars: readNumber("brightstepsTotalStars", 0),
  nextMilestone: readNumber("brightstepsNextMilestone", 50),
  round: {},
  recent: {},
  memory: { open: [], matched: [] },
  trace: { next: 1, done: [] },
  star: { target: 0, tapped: 0 },
  bubble: { target: "", popped: 0, goal: 10 },
  path: { next: 1, done: [] },
  quest: { step: 0, gems: 0, round: null },
  word: { target: "", slots: [] },
  balloon: { target: "", slots: [] }
};

const gameList = document.querySelector("#gameList");
const activity = document.querySelector("#activity");
const stars = document.querySelector("#stars");
const totalStars = document.querySelector("#totalStars");
const gameTitle = document.querySelector("#gameTitle");
const categoryLabel = document.querySelector("#categoryLabel");
const parentNote = document.querySelector("#parentNote");
const installButton = document.querySelector("#installButton");
let deferredInstallPrompt = null;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

document.querySelectorAll(".age-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.age = button.dataset.age;
    state.gameId = games[state.age][0].id;
    state.stars = 0;
    state.memory = { open: [], matched: [] };
    state.trace = { next: 1, done: [] };
    state.star = { target: 0, tapped: 0 };
    state.bubble = { target: "", popped: 0, goal: 10 };
    state.path = { next: 1, done: [] };
    state.quest = { step: 0, gems: 0, round: null };
    state.word = { target: "", slots: [] };
    state.balloon = { target: "", slots: [] };
    render();
  });
});

function currentGame() {
  return games[state.age].find((game) => game.id === state.gameId);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(text);
  voice.rate = 0.9;
  voice.pitch = 1.15;
  window.speechSynthesis.speak(voice);
}

function cheer(message) {
  state.stars += 1;
  state.totalStars += 1;
  stars.textContent = state.stars;
  totalStars.textContent = state.totalStars;
  writeNumber("brightstepsTotalStars", state.totalStars);
  const feedback = document.querySelector("#feedback");
  if (feedback) feedback.textContent = message;
  showHappySuccess(message);
  if (state.totalStars >= state.nextMilestone) {
    showMilestoneCelebration(state.nextMilestone);
    state.nextMilestone += 50;
    writeNumber("brightstepsNextMilestone", state.nextMilestone);
  }
}

function readNumber(key, fallback) {
  try {
    const value = Number(window.localStorage.getItem(key));
    return Number.isFinite(value) && value > 0 ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeNumber(key, value) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch {}
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickFresh(key, items, signature = (item) => String(item)) {
  const recent = state.recent[key] || [];
  const available = items.filter((item) => !recent.includes(signature(item)));
  const chosen = pick(available.length ? available : items);
  const value = signature(chosen);
  state.recent[key] = [value, ...recent.filter((item) => item !== value)].slice(0, Math.min(6, items.length - 1));
  return chosen;
}

function render() {
  renderChrome();
  const game = currentGame();
  gameTitle.textContent = game.title;
  categoryLabel.textContent = game.category;
  parentNote.textContent = game.parent;
  stars.textContent = state.stars;
  totalStars.textContent = state.totalStars;

  if (game.type === "colors") renderColors();
  if (game.type === "shapes") renderShapes();
  if (game.type === "count") renderCount();
  if (game.type === "animals") renderAnimals();
  if (game.type === "sizes") renderSizes();
  if (game.type === "feelings") renderFeelings();
  if (game.type === "shapeCatcher") renderShapeCatcher();
  if (game.type === "starTap") renderStarTap();
  if (game.type === "bubbleGarden") renderBubbleGarden();
  if (game.type === "letters") renderLetters();
  if (game.type === "patterns") renderPatterns();
  if (game.type === "memory") renderMemory();
  if (game.type === "rhymes") renderRhymes();
  if (game.type === "odd") renderOdd();
  if (game.type === "trace") renderTrace();
  if (game.type === "letterBalloons") renderLetterBalloons();
  if (game.type === "numberMuncher") renderNumberMuncher();
  if (game.type === "alphabetTrain") renderAlphabetTrain();
  if (game.type === "pathQuest") renderPathQuest();
  if (game.type === "math") renderMath();
  if (game.type === "words") renderWords();
  if (game.type === "sort") renderSort();
  if (game.type === "clock") renderClock();
  if (game.type === "skip") renderSkip();
  if (game.type === "vocab") renderVocab();
  if (game.type === "spellingBalloons") renderSpellingBalloons();
  if (game.type === "rocketMath") renderRocketMath();
  if (game.type === "wordComets") renderWordComets();
  if (game.type === "questIsland") renderQuestIsland();
}

function renderChrome() {
  document.querySelectorAll(".age-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.age === state.age);
  });

  gameList.innerHTML = games[state.age].map((game) => `
    <button class="game-button ${game.id === state.gameId ? "is-active" : ""}" data-game="${game.id}">
      <span class="game-icon" style="background:${game.color}">${game.icon}</span>
      <span>
        <span class="game-name">${game.title}</span>
        <span class="game-meta">${game.meta}</span>
      </span>
    </button>
  `).join("");

  gameList.querySelectorAll(".game-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.gameId = button.dataset.game;
      state.stars = 0;
      state.memory = { open: [], matched: [] };
      state.trace = { next: 1, done: [] };
      state.star = { target: 0, tapped: 0 };
      state.bubble = { target: "", popped: 0, goal: 10 };
      state.path = { next: 1, done: [] };
      state.quest = { step: 0, gems: 0, round: null };
      state.word = { target: "", slots: [] };
      state.balloon = { target: "", slots: [] };
      render();
    });
  });
}

function shell(prompt, extra = "") {
  activity.innerHTML = `
    <div class="prompt-row">
      <div>
        <p class="prompt">${prompt}</p>
        <p class="feedback" id="feedback"></p>
      </div>
      <button class="tool-button" id="soundButton" title="Hear prompt" aria-label="Hear prompt">Listen</button>
    </div>
    ${extra}
  `;
  document.querySelector("#soundButton").addEventListener("click", () => speak(prompt));
}

function renderColors() {
  const target = pickFresh("colors", palettes, (color) => color.name);
  state.round = target;
  shell(`Find ${target.name}`, `<div class="choice-grid"></div>`);
  const grid = activity.querySelector(".choice-grid");
  grid.innerHTML = shuffle(palettes).map((color) => `
    <button class="choice-button" data-answer="${color.name}">
      <span class="big-symbol" style="background:${color.value}"></span>
      <span class="label">${color.name}</span>
    </button>
  `).join("");
  bindAnswers(target.name, renderColors);
}

function renderShapes() {
  const target = pickFresh("shapes", shapes, (shape) => shape.name);
  state.round = target;
  shell(`Tap the ${target.name}`, `<div class="choice-grid"></div>`);
  const grid = activity.querySelector(".choice-grid");
  grid.innerHTML = shuffle(shapes).map((shape) => `
    <button class="choice-button" data-answer="${shape.name}">
      <svg class="big-symbol" viewBox="0 0 100 100" aria-hidden="true">${shape.svg}</svg>
      <span class="label">${shape.name}</span>
    </button>
  `).join("");
  bindAnswers(target.name, renderShapes);
}

function renderCount() {
  const target = pickFresh("count", [1, 2, 3, 4, 5]);
  const bubbles = Array.from({ length: target }, (_, index) => `
    <circle cx="${80 + index * 88}" cy="${120 - (index % 2) * 30}" r="34" fill="${palettes[index % palettes.length].value}" opacity="0.9"></circle>
  `).join("");
  shell(`How many bubbles?`, `
    <div class="scene">
      <svg viewBox="0 0 560 240" aria-label="${target} bubbles">${bubbles}</svg>
    </div>
    <div class="number-line">${[1, 2, 3, 4, 5].map((n) => `<button class="tile-button" data-answer="${n}">${n}</button>`).join("")}</div>
  `);
  bindAnswers(String(target), renderCount);
}

function renderAnimals() {
  const animals = [
    { name: "cow", sound: "moo", face: "cow" },
    { name: "duck", sound: "quack", face: "duck" },
    { name: "dog", sound: "woof", face: "dog" },
    { name: "cat", sound: "meow", face: "cat" }
  ];
  const target = pickFresh("animals", animals, (animal) => animal.name);
  shell(`Who says ${target.sound}?`, `
    <div class="choice-grid">
      ${shuffle(animals).map((animal) => `
        <button class="choice-button" data-answer="${animal.name}">
          <span class="big-symbol" style="background:${pick(palettes).value}">${animal.face[0].toUpperCase()}</span>
          <span class="label">${animal.name}</span>
        </button>
      `).join("")}
    </div>
  `);
  bindAnswers(target.name, renderAnimals);
}

function renderSizes() {
  const left = 70 + Math.floor(Math.random() * 90);
  const right = left > 115 ? 70 : 170;
  const askBig = Math.random() > 0.5;
  const answer = askBig ? (left > right ? "left" : "right") : (left < right ? "left" : "right");
  shell(`Tap the ${askBig ? "bigger" : "smaller"} tower`, `
    <div class="compare-display">
      <button class="compare-item choice-button" data-answer="left" aria-label="left tower">
        <span class="tower" style="height:${left}px"></span>
        <span class="label">left</span>
      </button>
      <button class="compare-item choice-button" data-answer="right" aria-label="right tower">
        <span class="tower" style="height:${right}px;background:#3f8cff"></span>
        <span class="label">right</span>
      </button>
    </div>
  `);
  bindAnswers(answer, renderSizes);
}

function renderFeelings() {
  const feelings = [
    { name: "happy", face: ":)" },
    { name: "sad", face: ":(" },
    { name: "calm", face: "-_-" },
    { name: "surprised", face: ":O" }
  ];
  const target = pickFresh("feelings", feelings, (feeling) => feeling.name);
  shell(`Find ${target.name}`, `
    <div class="choice-grid">
      ${shuffle(feelings).map((feeling) => `
        <button class="choice-button" data-answer="${feeling.name}">
          <span class="emoji-face">${feeling.face}</span>
          <span class="label">${feeling.name}</span>
        </button>
      `).join("")}
    </div>
  `);
  bindAnswers(target.name, renderFeelings);
}

function renderShapeCatcher() {
  const rounds = [
    { prompt: "Catch red", answer: "red", mode: "color" },
    { prompt: "Catch blue", answer: "blue", mode: "color" },
    { prompt: "Catch green", answer: "green", mode: "color" },
    { prompt: "Catch yellow", answer: "yellow", mode: "color" },
    { prompt: "Catch circle", answer: "circle", mode: "shape" },
    { prompt: "Catch square", answer: "square", mode: "shape" },
    { prompt: "Catch triangle", answer: "triangle", mode: "shape" },
    { prompt: "Catch star", answer: "star", mode: "shape" }
  ];
  const round = pickFresh("shapeCatcher", rounds, (item) => item.prompt);
  const values = round.mode === "color" ? palettes.map((color) => color.name) : shapes.map((shape) => shape.name);
  const choices = shuffle([round.answer, ...shuffle(values.filter((item) => item !== round.answer)).slice(0, 4)]);
  shell(round.prompt, movingStage(choices, round.answer, "catch"));
  bindMovingAnswers(round.answer, renderShapeCatcher);
}

function renderStarTap() {
  if (!state.star.target) {
    state.star.target = pickFresh("starTap", [2, 3, 4, 5]);
    state.star.tapped = 0;
  }
  shell(`Tap ${state.star.target} stars`, `
    <div class="star-status">
      <span>${state.star.tapped} of ${state.star.target}</span>
    </div>
    <div class="star-stage">
      ${Array.from({ length: 8 }, (_, index) => `
        <button class="tap-star" style="--star-x:${8 + (index % 4) * 23}%;--star-y:${16 + Math.floor(index / 4) * 42}%;--star-delay:${index * -0.25}s" aria-label="Tap star">
          *
        </button>
      `).join("")}
    </div>
  `);
  activity.querySelectorAll(".tap-star").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("is-collected")) return;
      button.classList.add("is-collected");
      state.star.tapped += 1;
      const status = document.querySelector(".star-status span");
      if (status) status.textContent = `${state.star.tapped} of ${state.star.target}`;
      if (state.star.tapped === state.star.target) {
        cheer("Stars counted");
        state.star = { target: 0, tapped: 0 };
        setTimeout(renderStarTap, 750);
      }
    });
  });
}

function renderBubbleGarden() {
  if (!state.bubble.target) {
    state.bubble.target = pickFresh("bubbleGarden", palettes, (color) => color.name).name;
    state.bubble.popped = 0;
    state.bubble.goal = 10;
  }
  const choices = Array.from({ length: 16 }, (_, index) => palettes[index % palettes.length].name);
  shell(`Pop ${state.bubble.target} bubbles`, `
    <div class="quest-progress">
      <span>${state.bubble.popped} / ${state.bubble.goal}</span>
      <span class="progress-track"><span style="width:${(state.bubble.popped / state.bubble.goal) * 100}%"></span></span>
    </div>
    <div class="bubble-garden">
      ${shuffle(choices).map((colorName, index) => {
        const color = palettes.find((item) => item.name === colorName);
        return `
          <button class="quest-bubble" style="--bubble-x:${6 + (index % 4) * 23}%;--bubble-y:${10 + Math.floor(index / 4) * 21}%;--bubble-delay:${index * -0.3}s;--bubble-color:${color.value}" data-bubble="${colorName}" aria-label="${colorName} bubble"></button>
        `;
      }).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-bubble]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.bubble === state.bubble.target) {
        button.classList.add("is-popped");
        state.bubble.popped += 1;
        cheer(state.bubble.popped === state.bubble.goal ? "Garden complete" : "Bubble pop");
        if (state.bubble.popped >= state.bubble.goal) {
          state.bubble = { target: "", popped: 0, goal: 10 };
          setTimeout(renderBubbleGarden, 800);
        } else {
          setTimeout(renderBubbleGarden, 350);
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function renderLetters() {
  const target = pickFresh("letters", letterWords, ([letter]) => letter);
  const choices = shuffle([target, ...shuffle(letterWords.filter(([letter]) => letter !== target[0])).slice(0, 5)]);
  shell(`Find ${target[0]} for ${target[1]}`, `<div class="choice-grid"></div>`);
  activity.querySelector(".choice-grid").innerHTML = choices.map(([letter, word]) => `
    <button class="choice-button" data-answer="${letter}">
      <span class="big-symbol" style="background:${pick(palettes).value}">${letter}</span>
      <span class="label">${word}</span>
    </button>
  `).join("");
  bindAnswers(target[0], renderLetters);
}

function renderPatterns() {
  const sets = [
    { row: ["red", "blue", "red", "blue"], answer: "red" },
    { row: ["circle", "square", "circle", "square"], answer: "circle" },
    { row: ["1", "2", "1", "2"], answer: "1" }
  ];
  const target = pick(sets);
  const options = target.answer === "red" ? ["red", "blue", "green"] : target.answer === "circle" ? ["circle", "square", "star"] : ["1", "2", "3"];
  shell("Finish the pattern", `
    <div class="pattern-row">
      ${target.row.map((item) => `<div class="pattern-item">${patternVisual(item)}</div>`).join("")}
      <div class="pattern-item">?</div>
    </div>
    <div class="choice-grid">${options.map((item) => `<button class="choice-button" data-answer="${item}" aria-label="${item}"><span class="label">${patternVisual(item)}</span></button>`).join("")}</div>
  `);
  bindAnswers(target.answer, renderPatterns);
}

function patternVisual(item) {
  const found = palettes.find((color) => color.name === item);
  if (found) return `<span class="big-symbol" style="width:72px;background:${found.value}"></span>`;
  if (item === "circle") return '<svg class="big-symbol" viewBox="0 0 100 100" style="width:72px"><circle cx="50" cy="50" r="34" fill="#3f8cff"></circle></svg>';
  if (item === "square") return '<svg class="big-symbol" viewBox="0 0 100 100" style="width:72px"><rect x="18" y="18" width="64" height="64" rx="8" fill="#ef6f6c"></rect></svg>';
  if (item === "star") return '<svg class="big-symbol" viewBox="0 0 100 100" style="width:72px"><path d="m50 10 11 25 27 3-20 18 6 27-24-14-24 14 6-27-20-18 27-3Z" fill="#f5c542"></path></svg>';
  return item;
}

function renderMemory() {
  if (!state.memory.cards) {
    state.memory.cards = shuffle(["A", "A", "B", "B", "C", "C", "D", "D"]);
    state.memory.open = [];
    state.memory.matched = [];
  }
  shell("Find matching pairs", `<div class="memory-grid"></div>`);
  const grid = activity.querySelector(".memory-grid");
  grid.innerHTML = state.memory.cards.map((card, index) => {
    const open = state.memory.open.includes(index) || state.memory.matched.includes(index);
    return `<button class="memory-card ${open ? "is-open" : ""} ${state.memory.matched.includes(index) ? "is-matched" : ""}" data-index="${index}">${open ? card : ""}</button>`;
  }).join("");
  grid.querySelectorAll(".memory-card").forEach((button) => {
    button.addEventListener("click", () => flipMemory(Number(button.dataset.index)));
  });
}

function flipMemory(index) {
  if (state.memory.open.includes(index) || state.memory.matched.includes(index) || state.memory.open.length === 2) return;
  state.memory.open.push(index);
  if (state.memory.open.length === 2) {
    const [a, b] = state.memory.open;
    if (state.memory.cards[a] === state.memory.cards[b]) {
      state.memory.matched.push(a, b);
      state.memory.open = [];
      cheer("Pair found");
      if (state.memory.matched.length === state.memory.cards.length) {
        state.memory.cards = null;
        setTimeout(renderMemory, 600);
        return;
      }
    } else {
      setTimeout(() => {
        state.memory.open = [];
        renderMemory();
      }, 700);
    }
  }
  renderMemory();
}

function renderRhymes() {
  const rounds = [
    { word: "cat", answer: "hat", options: ["hat", "sun", "log", "pen"] },
    { word: "bee", answer: "tree", options: ["book", "tree", "fish", "car"] },
    { word: "cake", answer: "snake", options: ["snake", "moon", "chair", "sock"] },
    { word: "star", answer: "car", options: ["cup", "car", "bed", "leaf"] },
    { word: "rain", answer: "train", options: ["train", "shirt", "frog", "milk"] },
    { word: "king", answer: "ring", options: ["ring", "boat", "lamp", "duck"] },
    { word: "light", answer: "kite", options: ["kite", "chair", "spoon", "apple"] },
    { word: "mouse", answer: "house", options: ["house", "tree", "sock", "fish"] }
  ];
  const round = pickFresh("rhymes", rounds, (item) => item.word);
  shell(`What rhymes with ${round.word}?`, `
    <div class="choice-grid">
      ${shuffle(round.options).map((word) => `<button class="choice-button" data-answer="${word}"><span class="label">${word}</span></button>`).join("")}
    </div>
  `);
  bindAnswers(round.answer, renderRhymes);
}

function renderOdd() {
  const rounds = [
    { items: ["apple", "banana", "grape", "bus"], answer: "bus" },
    { items: ["red", "blue", "green", "table"], answer: "table" },
    { items: ["circle", "square", "triangle", "spoon"], answer: "spoon" },
    { items: ["shirt", "sock", "shoe", "cloud"], answer: "cloud" },
    { items: ["cow", "dog", "cat", "pencil"], answer: "pencil" },
    { items: ["car", "bus", "bike", "banana"], answer: "banana" },
    { items: ["bed", "chair", "table", "tiger"], answer: "tiger" },
    { items: ["sun", "moon", "star", "sock"], answer: "sock" }
  ];
  const round = pickFresh("odd", rounds, (item) => item.answer);
  shell("Which one is different?", `
    <div class="choice-grid">
      ${shuffle(round.items).map((item) => `<button class="choice-button" data-answer="${item}"><span class="label">${item}</span></button>`).join("")}
    </div>
  `);
  bindAnswers(round.answer, renderOdd);
}

function renderTrace() {
  if (!state.trace.cards) {
    state.trace.cards = shuffle([1, 2, 3, 4, 5, 6]);
    state.trace.next = 1;
    state.trace.done = [];
  }
  shell(`Tap ${state.trace.next}`, `
    <div class="trace-board">
      ${state.trace.cards.map((number) => `
        <button class="trace-dot ${state.trace.done.includes(number) ? "is-done" : ""}" data-number="${number}">
          ${number}
        </button>
      `).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-number]").forEach((button) => {
    button.addEventListener("click", () => {
      const number = Number(button.dataset.number);
      if (number === state.trace.next) {
        state.trace.done.push(number);
        state.trace.next += 1;
        cheer(number === 6 ? "Path complete" : "Keep going");
        if (number === 6) {
          state.trace.cards = null;
          setTimeout(renderTrace, 650);
        } else {
          renderTrace();
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function renderLetterBalloons() {
  const target = pickFresh("letterBalloons", letterWords, ([letter]) => letter);
  const choices = shuffle([target[0], ...shuffle(letterWords.map(([letter]) => letter).filter((letter) => letter !== target[0])).slice(0, 5)]);
  shell(`Pop ${target[0]} for ${target[1]}`, balloonStage(choices, target[0], ""));
  bindBalloonAnswers(target[0], renderLetterBalloons);
}

function renderNumberMuncher() {
  const rounds = [
    { prompt: "Feed 2", answer: "2", choices: ["1", "2", "3", "4", "5"] },
    { prompt: "Feed 5", answer: "5", choices: ["2", "3", "4", "5", "6"] },
    { prompt: "1 + 2", answer: "3", choices: ["2", "3", "4", "5", "6"] },
    { prompt: "2 + 3", answer: "5", choices: ["3", "4", "5", "6", "7"] },
    { prompt: "6 - 2", answer: "4", choices: ["2", "3", "4", "5", "6"] },
    { prompt: "Count to 7", answer: "7", choices: ["5", "6", "7", "8", "9"] }
  ];
  const round = pickFresh("numberMuncher", rounds, (item) => item.prompt);
  shell(`${round.prompt}: choose ${round.answer}`, `
    <div class="muncher-stage">
      <div class="muncher" aria-hidden="true">
        <span class="muncher-eye"></span>
        <span class="muncher-eye"></span>
        <span class="muncher-mouth"></span>
      </div>
      <div class="muncher-snacks">
        ${shuffle(round.choices).map((choice, index) => `
          <button class="snack" style="--snack-x:${8 + index * 18}%;--snack-delay:${index * -0.55}s" data-moving="${choice}" aria-label="Feed ${choice}">
            ${choice}
          </button>
        `).join("")}
      </div>
    </div>
  `);
  bindMovingAnswers(round.answer, renderNumberMuncher);
}

function renderAlphabetTrain() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const startIndex = 1 + Math.floor(Math.random() * 20);
  const shown = alphabet.slice(startIndex, startIndex + 3);
  const answer = alphabet[startIndex + 3];
  const choices = shuffle([answer, alphabet[startIndex + 4], alphabet[startIndex - 1], alphabet[startIndex + 5]]);
  shell(`What comes after ${shown.join(", ")}?`, `
    <div class="train-stage">
      <div class="train-track" aria-hidden="true"></div>
      <div class="train-engine" aria-hidden="true">A</div>
      ${shown.map((letter, index) => `<div class="train-car fixed-car" style="--car-left:${24 + index * 16}%">${letter}</div>`).join("")}
      <div class="train-choices">
        ${choices.map((letter, index) => `
          <button class="train-car choice-car" style="--car-delay:${index * -0.35}s" data-moving="${letter}" aria-label="${letter}">
            ${letter}
          </button>
        `).join("")}
      </div>
    </div>
  `);
  bindMovingAnswers(answer, renderAlphabetTrain);
}

function renderPathQuest() {
  if (!state.path.cards) {
    state.path.cards = shuffle(Array.from({ length: 12 }, (_, index) => index + 1));
    state.path.next = 1;
    state.path.done = [];
  }
  shell(`Step on ${state.path.next}`, `
    <div class="quest-progress">
      <span>${state.path.done.length} / 12 stones</span>
      <span class="progress-track"><span style="width:${(state.path.done.length / 12) * 100}%"></span></span>
    </div>
    <div class="path-stage">
      <div class="path-hero" style="--hero-step:${state.path.done.length}" aria-hidden="true"></div>
      ${state.path.cards.map((number, index) => `
        <button class="path-stone ${state.path.done.includes(number) ? "is-done" : ""}" style="--stone-x:${8 + (index % 4) * 24}%;--stone-y:${10 + Math.floor(index / 4) * 28}%" data-path="${number}">
          ${number}
        </button>
      `).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-path]").forEach((button) => {
    button.addEventListener("click", () => {
      const number = Number(button.dataset.path);
      if (number === state.path.next) {
        state.path.done.push(number);
        state.path.next += 1;
        cheer(number === 12 ? "Path complete" : "Step");
        if (number === 12) {
          state.path = { next: 1, done: [] };
          setTimeout(renderPathQuest, 850);
        } else {
          renderPathQuest();
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function renderMath() {
  const rounds = Array.from({ length: 18 }, (_, index) => {
    const a = 3 + (index % 9);
    const b = 1 + (index % 6);
    const add = index % 3 !== 0;
    return {
      answer: add ? a + b : Math.max(a, b) - Math.min(a, b),
      prompt: add ? `${a} + ${b} = ?` : `${Math.max(a, b)} - ${Math.min(a, b)} = ?`
    };
  });
  const round = pickFresh("math", rounds, (item) => item.prompt);
  const answer = round.answer;
  const prompt = round.prompt;
  const options = shuffle([answer, answer + 1, Math.max(0, answer - 1), answer + 2]).slice(0, 4);
  shell(prompt, `<div class="number-line">${options.map((n) => `<button class="tile-button" data-answer="${n}">${n}</button>`).join("")}</div>`);
  bindAnswers(String(answer), renderMath);
}

function renderWords() {
  if (!state.word.target) {
    state.word.target = pickFresh("words", spellingWords);
    state.word.slots = [];
  }
  const nextLetter = state.word.target[state.word.slots.length];
  const distractors = "ABCDEILMNOPRSTU".split("").filter((letter) => letter !== nextLetter);
  const letters = shuffle([nextLetter, ...shuffle(distractors).slice(0, 5)]);
  shell(`Build ${state.word.target}`, `
    <div class="word-slots">${state.word.target.split("").map((_, index) => `<div class="slot">${state.word.slots[index] || ""}</div>`).join("")}</div>
    <div class="choice-grid">${letters.map((letter) => `<button class="tile-button" data-letter="${letter}">${letter}</button>`).join("")}</div>
  `);
  activity.querySelectorAll("[data-letter]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = state.word.slots.length;
      const wanted = state.word.target[next];
      if (button.dataset.letter === wanted) {
        state.word.slots.push(wanted);
        if (state.word.slots.join("") === state.word.target) {
          cheer("Word built");
          state.word.target = "";
          setTimeout(renderWords, 700);
        } else {
          renderWords();
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function renderSort() {
  const items = [
    { name: "tree", answer: "living" },
    { name: "dog", answer: "living" },
    { name: "rock", answer: "non-living" },
    { name: "car", answer: "non-living" },
    { name: "flower", answer: "living" },
    { name: "chair", answer: "non-living" },
    { name: "bird", answer: "living" },
    { name: "phone", answer: "non-living" },
    { name: "fish", answer: "living" },
    { name: "pencil", answer: "non-living" },
    { name: "grass", answer: "living" },
    { name: "spoon", answer: "non-living" }
  ];
  const target = pickFresh("sort", items, (item) => item.name);
  shell(`Sort: ${target.name}`, `
    <div class="scene">
      <svg viewBox="0 0 560 240" aria-hidden="true">
        <rect x="180" y="60" width="200" height="120" rx="18" fill="#ffffff"></rect>
        <text x="280" y="136" text-anchor="middle" font-size="44" font-weight="800" fill="#243044">${target.name}</text>
      </svg>
    </div>
    <div class="choice-grid">
      <button class="choice-button" data-answer="living"><span class="label">Living</span></button>
      <button class="choice-button" data-answer="non-living"><span class="label">Non-living</span></button>
    </div>
  `);
  bindAnswers(target.answer, renderSort);
}

function renderClock() {
  const times = [];
  for (let hour = 1; hour <= 12; hour += 1) {
    times.push({ hour, minute: 0 });
    times.push({ hour, minute: 30 });
  }
  const time = pickFresh("clock", times, (item) => `${item.hour}:${item.minute}`);
  const answer = formatTime(time.hour, time.minute);
  const options = shuffle([
    answer,
    formatTime(time.hour === 12 ? 1 : time.hour + 1, time.minute),
    formatTime(time.hour === 1 ? 12 : time.hour - 1, time.minute),
    formatTime(time.hour, time.minute === 0 ? 30 : 0)
  ]);
  shell("What time is it?", `
    ${analogClock(time.hour, time.minute, answer)}
    <div class="number-line">${options.map((time) => `<button class="tile-button" data-answer="${time}">${time}</button>`).join("")}</div>
  `);
  bindAnswers(answer, renderClock);
}

function formatTime(hour, minute) {
  return `${hour}:${String(minute).padStart(2, "0")}`;
}

function analogClock(hour, minute, answer) {
  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const minuteAngle = minute * 6;
  const numbers = Array.from({ length: 12 }, (_, index) => {
    const number = index + 1;
    const angle = (number * 30 - 90) * Math.PI / 180;
    const x = 100 + Math.cos(angle) * 76;
    const y = 100 + Math.sin(angle) * 76;
    return `<text x="${x.toFixed(1)}" y="${(y + 5).toFixed(1)}" text-anchor="middle">${number}</text>`;
  }).join("");
  return `
    <div class="analog-clock-wrap">
      <svg class="analog-clock" viewBox="0 0 200 200" aria-label="analog clock showing ${answer}">
        <circle cx="100" cy="100" r="92" class="clock-outer"></circle>
        <circle cx="100" cy="100" r="78" class="clock-inner"></circle>
        ${numbers}
        <line x1="100" y1="100" x2="100" y2="48" class="clock-hand hour-hand" transform="rotate(${hourAngle} 100 100)"></line>
        <line x1="100" y1="100" x2="100" y2="30" class="clock-hand minute-hand" transform="rotate(${minuteAngle} 100 100)"></line>
        <circle cx="100" cy="100" r="7" class="clock-pin"></circle>
      </svg>
    </div>
  `;
}

function renderSkip() {
  const rounds = [
    { row: [2, 4, 6], answer: 8, options: [7, 8, 9, 10] },
    { row: [5, 10, 15], answer: 20, options: [18, 20, 25, 30] },
    { row: [10, 20, 30], answer: 40, options: [35, 40, 45, 50] },
    { row: [3, 6, 9], answer: 12, options: [11, 12, 13, 15] }
  ];
  const round = pickFresh("skip", rounds, (item) => item.row.join("-"));
  shell("What comes next?", `
    <div class="pattern-row">
      ${round.row.map((number) => `<div class="pattern-item">${number}</div>`).join("")}
      <div class="pattern-item">?</div>
    </div>
    <div class="number-line">${shuffle(round.options).map((number) => `<button class="tile-button" data-answer="${number}">${number}</button>`).join("")}</div>
  `);
  bindAnswers(String(round.answer), renderSkip);
}

function renderVocab() {
  const rounds = [
    { prompt: "Which means fast?", answer: "quick", options: ["quick", "quiet", "heavy", "round"] },
    { prompt: "Which means tiny?", answer: "small", options: ["small", "bright", "loud", "long"] },
    { prompt: "Which means happy?", answer: "glad", options: ["glad", "cold", "wide", "slow"] },
    { prompt: "Which means smart?", answer: "clever", options: ["clever", "sleepy", "soft", "empty"] },
    { prompt: "Which means begin?", answer: "start", options: ["start", "finish", "fall", "break"] },
    { prompt: "Which means simple?", answer: "easy", options: ["easy", "sharp", "deep", "dark"] },
    { prompt: "Which means quiet?", answer: "silent", options: ["silent", "messy", "tiny", "brave"] },
    { prompt: "Which means brave?", answer: "bold", options: ["bold", "wet", "late", "thin"] }
  ];
  const round = pickFresh("vocab", rounds, (item) => item.prompt);
  shell(round.prompt, `
    <div class="choice-grid">
      ${shuffle(round.options).map((word) => `<button class="choice-button" data-answer="${word}"><span class="label">${word}</span></button>`).join("")}
    </div>
  `);
  bindAnswers(round.answer, renderVocab);
}

function renderSpellingBalloons() {
  if (!state.balloon.target) {
    state.balloon.target = pickFresh("spellingBalloons", spellingWords);
    state.balloon.slots = [];
  }
  const nextLetter = state.balloon.target[state.balloon.slots.length];
  const distractors = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((letter) => letter !== nextLetter);
  const choices = shuffle([nextLetter, ...shuffle(distractors).slice(0, 6)]);
  shell(`Spell ${state.balloon.target}: pop ${nextLetter}`, balloonStage(choices, nextLetter, state.balloon.slots.join("")));
  activity.querySelectorAll("[data-balloon]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.balloon === nextLetter) {
        state.balloon.slots.push(nextLetter);
        cheer(state.balloon.slots.join("") === state.balloon.target ? "Word complete" : "Nice pop");
        if (state.balloon.slots.join("") === state.balloon.target) {
          state.balloon.target = "";
          setTimeout(renderSpellingBalloons, 750);
        } else {
          renderSpellingBalloons();
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function renderRocketMath() {
  const rounds = [
    { prompt: "7 + 5", answer: "12", choices: ["10", "11", "12", "13"] },
    { prompt: "9 + 6", answer: "15", choices: ["14", "15", "16", "17"] },
    { prompt: "18 - 7", answer: "11", choices: ["9", "10", "11", "12"] },
    { prompt: "4 x 2", answer: "8", choices: ["6", "7", "8", "10"] },
    { prompt: "5 x 3", answer: "15", choices: ["12", "15", "18", "20"] },
    { prompt: "24 / 4", answer: "6", choices: ["4", "5", "6", "8"] }
  ];
  const round = pickFresh("rocketMath", rounds, (item) => item.prompt);
  shell(`${round.prompt} = ?`, `
    <div class="rocket-stage">
      <div class="stars-field" aria-hidden="true"></div>
      <div class="rocket" id="rocketShip" aria-hidden="true">
        <span class="rocket-window"></span>
        <span class="rocket-flame"></span>
      </div>
      <div class="rocket-choices">
        ${shuffle(round.choices).map((choice) => `<button class="tile-button rocket-choice" data-answer="${choice}">${choice}</button>`).join("")}
      </div>
    </div>
  `);
  activity.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.answer === round.answer) {
        button.classList.add("is-correct");
        document.querySelector("#rocketShip").classList.add("is-launched");
        cheer("Launch");
        setTimeout(renderRocketMath, 950);
      } else {
        markWrong(button);
      }
    });
  });
}

function renderWordComets() {
  const rounds = [
    { prompt: "Catch the word that means fast", answer: "quick", choices: ["quick", "quiet", "heavy", "round"] },
    { prompt: "Catch the word that means tiny", answer: "small", choices: ["small", "bright", "loud", "long"] },
    { prompt: "Catch the word that means brave", answer: "bold", choices: ["bold", "late", "soft", "wide"] },
    { prompt: "Catch the word that means begin", answer: "start", choices: ["start", "finish", "sleep", "carry"] },
    { prompt: "Catch the word that means clever", answer: "smart", choices: ["smart", "cold", "empty", "slow"] },
    { prompt: "Catch the word that means silent", answer: "quiet", choices: ["quiet", "messy", "sharp", "deep"] }
  ];
  const round = pickFresh("wordComets", rounds, (item) => item.prompt);
  shell(round.prompt, `
    <div class="comet-stage">
      ${shuffle(round.choices).map((word, index) => `
        <button class="comet-word" style="--comet-y:${12 + index * 18}%;--comet-delay:${index * -0.65}s" data-moving="${word}">
          ${word}
        </button>
      `).join("")}
    </div>
  `);
  bindMovingAnswers(round.answer, renderWordComets);
}

function renderQuestIsland() {
  if (!state.quest.round) {
    state.quest.round = nextIslandRound();
  }
  const round = state.quest.round;
  shell(round.prompt, `
    <div class="quest-progress">
      <span>${state.quest.gems} / 6 gems</span>
      <span class="progress-track gem-track"><span style="width:${(state.quest.gems / 6) * 100}%"></span></span>
    </div>
    <div class="island-stage">
      <div class="island-map" aria-hidden="true">
        ${Array.from({ length: 6 }, (_, index) => `<span class="gem ${index < state.quest.gems ? "is-collected" : ""}" style="--gem-left:${12 + index * 14}%"></span>`).join("")}
        <span class="island-player" style="--island-step:${state.quest.gems}"></span>
      </div>
      <div class="choice-grid island-choices">
        ${shuffle(round.options).map((option) => `<button class="choice-button" data-answer="${option}"><span class="label">${option}</span></button>`).join("")}
      </div>
    </div>
  `);
  activity.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.answer === round.answer) {
        state.quest.gems += 1;
        state.quest.step += 1;
        state.quest.round = null;
        button.classList.add("is-correct");
        cheer(state.quest.gems === 6 ? "Quest complete" : "Gem found");
        if (state.quest.gems === 6) {
          state.quest = { step: 0, gems: 0, round: null };
        }
        setTimeout(renderQuestIsland, 800);
      } else {
        markWrong(button);
      }
    });
  });
}

function nextIslandRound() {
  const rounds = [
    { prompt: "Island math: 8 + 7 = ?", answer: "15", options: ["13", "14", "15", "16"] },
    { prompt: "Island math: 21 - 9 = ?", answer: "12", options: ["10", "11", "12", "13"] },
    { prompt: "Pick the synonym for tiny", answer: "small", options: ["small", "bright", "quick", "wide"] },
    { prompt: "Spell the animal", answer: "TIGER", options: ["TIGER", "TRIGE", "TIGRE", "TAGER"] },
    { prompt: "Which is living?", answer: "flower", options: ["chair", "stone", "flower", "phone"] },
    { prompt: "What comes next: 5, 10, 15, ?", answer: "20", options: ["18", "20", "25", "30"] },
    { prompt: "Pick the rhyme for light", answer: "kite", options: ["kite", "leaf", "book", "moon"] },
    { prompt: "Which means begin?", answer: "start", options: ["finish", "start", "sleep", "close"] }
  ];
  return pickFresh("questIsland", rounds, (round) => round.prompt);
}

function movingStage(items, answer, kind) {
  return `
    <div class="moving-stage ${kind === "catch" ? "catch-stage" : ""}">
      ${items.map((item, index) => {
        const color = palettes.find((palette) => palette.name === item);
        const shape = shapes.find((shapeItem) => shapeItem.name === item);
        const label = color ? item : shape ? item : String(item);
        const visual = color
          ? `<span class="falling-visual" style="background:${color.value}"></span>`
          : shape
            ? `<svg class="falling-visual" viewBox="0 0 100 100" aria-hidden="true">${shape.svg}</svg>`
            : `<span class="falling-number">${item}</span>`;
        return `
          <button class="falling-item" style="--fall-x:${7 + index * 18}%;--fall-delay:${index * -0.7}s;--fall-speed:${4.7 + (index % 3) * 0.75}s" data-moving="${item}" aria-label="${label}">
            ${visual}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function bindMovingAnswers(answer, nextRound) {
  activity.querySelectorAll("[data-moving]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.moving === answer) {
        button.classList.add("is-correct");
        cheer("Caught");
        setTimeout(nextRound, 450);
      } else {
        markWrong(button);
      }
    });
  });
}

function balloonStage(letters, answer, built) {
  return `
    <div class="balloon-status">
      <span>${built || "Ready"}</span>
      <span>Target: ${answer}</span>
    </div>
    <div class="balloon-stage">
      ${letters.map((letter, index) => `
        <button class="balloon" style="--x:${8 + index * 13}%;--delay:${(index % 4) * -0.85}s;--speed:${5.5 + (index % 3)}s;--balloon-color:${palettes[index % palettes.length].value}" data-balloon="${letter}" aria-label="Pop ${letter}">
          <span>${letter}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function bindBalloonAnswers(answer, nextRound) {
  activity.querySelectorAll("[data-balloon]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.balloon === answer) {
        cheer("Pop");
        button.classList.add("is-popped");
        setTimeout(nextRound, 350);
      } else {
        markWrong(button);
      }
    });
  });
}

function bindAnswers(answer, nextRound) {
  activity.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.answer === answer) {
        button.classList.add("is-correct");
        cheer("Great job");
        setTimeout(nextRound, 650);
      } else {
        markWrong(button);
      }
    });
  });
}

function markWrong(button) {
  button.classList.add("is-wrong");
  showSillyWrong();
  const feedback = document.querySelector("#feedback");
  if (feedback) feedback.textContent = "Try again";
  setTimeout(() => button.classList.remove("is-wrong"), 500);
}

function showHappySuccess(message) {
  const oldPopup = activity.querySelector(".kid-success");
  if (oldPopup) oldPopup.remove();
  const popup = document.createElement("div");
  popup.className = "kid-success";
  popup.setAttribute("role", "status");
  popup.innerHTML = `
    ${shauryaSmiley("happy")}
    <strong>${message}</strong>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1050);
}

function showSillyWrong() {
  const oldPopup = activity.querySelector(".silly-wrong");
  if (oldPopup) oldPopup.remove();
  const popup = document.createElement("div");
  popup.className = "silly-wrong";
  popup.setAttribute("role", "status");
  popup.innerHTML = `
    ${shauryaSmiley("sad")}
    <strong>Oops!</strong>
    <span>Try another one</span>
    <i style="--pop-left:18%;--pop-delay:0s"></i>
    <i style="--pop-left:38%;--pop-delay:0.08s"></i>
    <i style="--pop-left:62%;--pop-delay:0.14s"></i>
    <i style="--pop-left:82%;--pop-delay:0.2s"></i>
  `;
  activity.appendChild(popup);
  setTimeout(() => popup.remove(), 1150);
}

function shauryaSmiley(mood) {
  const happy = mood === "happy";
  return `
    <div class="shaurya-smiley ${happy ? "is-happy" : "is-sad"}" aria-hidden="true">
      <span class="curl c1"></span>
      <span class="curl c2"></span>
      <span class="curl c3"></span>
      <span class="curl c4"></span>
      <span class="curl c5"></span>
      <span class="curl c6"></span>
      <span class="face-base">
        <span class="cheek left-cheek"></span>
        <span class="cheek right-cheek"></span>
        <span class="eye left-eye"></span>
        <span class="eye right-eye"></span>
        <span class="blink blink-left"></span>
        <span class="blink blink-right"></span>
        <span class="nose"></span>
        <span class="expression-mouth"></span>
      </span>
      <span class="sparkle s1"></span>
      <span class="sparkle s2"></span>
      <span class="sparkle s3"></span>
    </div>
  `;
}

function showMilestoneCelebration(milestone) {
  const oldCelebration = document.querySelector(".milestone-celebration");
  if (oldCelebration) oldCelebration.remove();
  const celebration = document.createElement("div");
  celebration.className = "milestone-celebration";
  celebration.setAttribute("role", "status");
  celebration.innerHTML = `
    <div class="badge-burst" aria-hidden="true">
      <span class="badge-ring"></span>
      <span class="badge-core">${milestone}</span>
      <i style="--spark-x:12%;--spark-delay:0s"></i>
      <i style="--spark-x:28%;--spark-delay:0.05s"></i>
      <i style="--spark-x:44%;--spark-delay:0.1s"></i>
      <i style="--spark-x:60%;--spark-delay:0.15s"></i>
      <i style="--spark-x:76%;--spark-delay:0.2s"></i>
      <i style="--spark-x:90%;--spark-delay:0.25s"></i>
    </div>
    <h3>Milestone Unlocked</h3>
    <p>Rainbow Champion badge</p>
    <button class="tool-button" id="closeMilestone">Keep playing</button>
  `;
  document.body.appendChild(celebration);
  celebration.querySelector("#closeMilestone").addEventListener("click", () => celebration.remove());
  setTimeout(() => celebration.remove(), 6500);
}

render();
