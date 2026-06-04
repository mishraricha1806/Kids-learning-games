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
  round: {},
  recent: {},
  memory: { open: [], matched: [] },
  trace: { next: 1, done: [] },
  word: { target: "", slots: [] },
  balloon: { target: "", slots: [] }
};

const gameList = document.querySelector("#gameList");
const activity = document.querySelector("#activity");
const stars = document.querySelector("#stars");
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
  stars.textContent = state.stars;
  const feedback = document.querySelector("#feedback");
  if (feedback) feedback.textContent = message;
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

  if (game.type === "colors") renderColors();
  if (game.type === "shapes") renderShapes();
  if (game.type === "count") renderCount();
  if (game.type === "animals") renderAnimals();
  if (game.type === "sizes") renderSizes();
  if (game.type === "feelings") renderFeelings();
  if (game.type === "letters") renderLetters();
  if (game.type === "patterns") renderPatterns();
  if (game.type === "memory") renderMemory();
  if (game.type === "rhymes") renderRhymes();
  if (game.type === "odd") renderOdd();
  if (game.type === "trace") renderTrace();
  if (game.type === "letterBalloons") renderLetterBalloons();
  if (game.type === "math") renderMath();
  if (game.type === "words") renderWords();
  if (game.type === "sort") renderSort();
  if (game.type === "clock") renderClock();
  if (game.type === "skip") renderSkip();
  if (game.type === "vocab") renderVocab();
  if (game.type === "spellingBalloons") renderSpellingBalloons();
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
  const hour = pickFresh("clock", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const answer = `${hour}:00`;
  const options = shuffle([answer, `${hour === 12 ? 1 : hour + 1}:00`, `${hour === 1 ? 12 : hour - 1}:00`, `${hour}:30`]);
  shell("What time is it?", `
    <div class="clock-face" aria-label="clock showing ${answer}">${answer}</div>
    <div class="number-line">${options.map((time) => `<button class="tile-button" data-answer="${time}">${time}</button>`).join("")}</div>
  `);
  bindAnswers(answer, renderClock);
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
  const feedback = document.querySelector("#feedback");
  if (feedback) feedback.textContent = "Try again";
  setTimeout(() => button.classList.remove("is-wrong"), 500);
}

render();
