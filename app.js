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
    },
    {
      id: "talking-buddy",
      title: "Talking Buddy",
      category: "Pretend",
      icon: "T",
      color: "#00a6a6",
      meta: "Talk, repeat, dance, and learn",
      parent: "A responsive talking friend encourages language, imitation, listening, and playful emotional learning.",
      type: "talkingBuddy"
    },
    {
      id: "bubble-gum-pop",
      title: "Bubble Gum Pop",
      category: "Arcade",
      icon: "G",
      color: "#ef6f6c",
      meta: "Pop growing gum bubbles",
      parent: "Fast bubble popping keeps little kids engaged while reinforcing colors and counting.",
      type: "bubbleGum"
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
      id: "rhyme-band",
      title: "Rhyme Band",
      category: "Music",
      icon: "M",
      color: "#f5a623",
      meta: "Play rhymes on piano and guitar",
      parent: "Simple music play builds listening, rhythm, memory, and sequencing with familiar rhyme melodies.",
      type: "rhymeBand"
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
    },
    {
      id: "photo-runner",
      title: "Adventure Run",
      category: "Arcade",
      icon: "R",
      color: "#2eb872",
      meta: "Easy, medium, and hard runner",
      parent: "A longer adventure runner uses level-based speed, obstacles, coins, answer gates, and a custom runner photo.",
      type: "photoRunner"
    },
    {
      id: "robot-builder",
      title: "Robot Builder",
      category: "STEM",
      icon: "B",
      color: "#8067dc",
      meta: "Build a robot with 8 smart parts",
      parent: "A mission-style robot game keeps six-year-olds engaged while practicing letters, numbers, colors, and sequencing.",
      type: "robotBuilder"
    },
    {
      id: "space-rescue",
      title: "Space Rescue",
      category: "Arcade",
      icon: "S",
      color: "#3f8cff",
      meta: "Save stars by tapping answers",
      parent: "Fast moving space missions combine action with simple math, letter sounds, and visual scanning.",
      type: "spaceRescue"
    },
    {
      id: "dino-dig",
      title: "Dino Dig",
      category: "Quest",
      icon: "D",
      color: "#f5a623",
      meta: "Dig fossils through mini challenges",
      parent: "A fossil hunt adds collection and discovery to early math, word, and pattern practice.",
      type: "dinoDig"
    },
    {
      id: "arrow-puzzle",
      title: "Arrow Puzzle",
      category: "Puzzle",
      icon: ">",
      color: "#00a6a6",
      meta: "Reach the star within limited moves",
      parent: "A level-based arrow maze builds planning, direction sense, and flexible problem solving with limited turns.",
      type: "arrowPuzzle"
    },
    {
      id: "water-solver",
      title: "Water Solver",
      category: "Puzzle",
      icon: "W",
      color: "#3f8cff",
      meta: "Pour colors into matching tubes",
      parent: "Water sorting strengthens sequencing, planning, and visual grouping through calm, repeatable puzzle levels.",
      type: "waterSolver"
    },
    {
      id: "line-sort",
      title: "Line Sort",
      category: "Puzzle",
      icon: "=",
      color: "#8067dc",
      meta: "Put matching objects in each row",
      parent: "Object-line sorting helps children plan swaps, compare patterns, and organize similar items together.",
      type: "lineSort"
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
    },
    {
      id: "junior-2048",
      title: "2048 Junior",
      category: "Puzzle",
      icon: "2",
      color: "#3f8cff",
      meta: "Merge tiles to reach 2048",
      parent: "A number-merging puzzle builds planning, place value intuition, and persistence.",
      type: "junior2048"
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

const skillMap = {
  Colors: "Colors",
  Shapes: "Shapes",
  Numbers: "Numbers",
  Listening: "Listening",
  Compare: "Logic",
  Emotions: "Social",
  Action: "Focus",
  Quest: "Persistence",
  Pretend: "Language",
  Arcade: "Focus",
  Alphabet: "Reading",
  Logic: "Logic",
  Focus: "Memory",
  Reading: "Reading",
  Thinking: "Logic",
  Math: "Math",
  Science: "Science",
  Time: "Time",
  Words: "Vocabulary",
  Spelling: "Spelling",
  Puzzle: "Logic",
  Music: "Music",
  STEM: "STEM"
};

function melody(pattern) {
  return Array.from({ length: 21 }, (_, index) => pattern[index % pattern.length]);
}

const rhymeSongs = [
  { title: "Twinkle Star", words: "Twinkle, twinkle, little star", notes: melody(["C", "C", "G", "G", "A", "A", "G"]) },
  { title: "Mary Lamb", words: "Mary had a little lamb", notes: melody(["E", "D", "C", "D", "E", "E", "E"]) },
  { title: "Row Boat", words: "Row, row, row your boat", notes: melody(["C", "C", "C", "D", "E", "E", "D"]) },
  { title: "Rain Rain", words: "Rain, rain, go away", notes: melody(["G", "E", "G", "E", "C", "D", "E"]) },
  { title: "Baa Baa", words: "Baa baa black sheep", notes: melody(["C", "C", "G", "G", "A", "A", "G"]) },
  { title: "Hot Cross", words: "Hot cross buns", notes: melody(["E", "D", "C", "E", "D", "C", "C"]) },
  { title: "London Bridge", words: "London Bridge is falling down", notes: melody(["G", "A", "G", "F", "E", "F", "G"]) },
  { title: "Old MacDonald", words: "Old MacDonald had a farm", notes: melody(["C", "C", "C", "G", "A", "A", "G"]) },
  { title: "Itsy Spider", words: "Itsy bitsy spider", notes: melody(["C", "D", "E", "E", "D", "C", "D"]) },
  { title: "Humpty Dumpty", words: "Humpty Dumpty sat on a wall", notes: melody(["E", "E", "D", "C", "D", "E", "F"]) },
  { title: "Jack Jill", words: "Jack and Jill went up the hill", notes: melody(["C", "D", "E", "C", "E", "D", "C"]) },
  { title: "Hickory Dock", words: "Hickory dickory dock", notes: melody(["C", "E", "G", "G", "E", "C", "D"]) },
  { title: "Little Teapot", words: "I am a little teapot", notes: melody(["C", "D", "E", "F", "G", "E", "C"]) },
  { title: "Wheels Bus", words: "The wheels on the bus", notes: melody(["G", "G", "E", "F", "G", "A", "G"]) },
  { title: "Muffin Man", words: "Do you know the muffin man", notes: melody(["C", "D", "E", "C", "D", "E", "G"]) },
  { title: "Three Mice", words: "Three blind mice", notes: melody(["E", "D", "C", "E", "D", "C", "G"]) },
  { title: "Ring Roses", words: "Ring around the roses", notes: melody(["C", "C", "D", "E", "G", "E", "D"]) },
  { title: "Pat Cake", words: "Pat-a-cake, pat-a-cake", notes: melody(["C", "E", "G", "E", "C", "D", "E"]) },
  { title: "This Old Man", words: "This old man, he played one", notes: melody(["G", "E", "G", "E", "C", "D", "E"]) },
  { title: "Yankee Doodle", words: "Yankee Doodle went to town", notes: melody(["C", "C", "D", "E", "C", "E", "D"]) },
  { title: "Polly Kettle", words: "Polly put the kettle on", notes: melody(["E", "F", "G", "E", "F", "G", "A"]) },
  { title: "Alphabet Song", words: "A B C D E F G", notes: melody(["C", "C", "G", "G", "A", "A", "G"]) },
  { title: "Good Morning", words: "Good morning to you", notes: melody(["C", "D", "E", "C", "E", "D", "C"]) },
  { title: "Sleep Baby", words: "Sleep, baby, sleep", notes: melody(["G", "E", "D", "C", "D", "E", "C"]) },
  { title: "Clap Hands", words: "Clap your hands together", notes: melody(["C", "D", "C", "E", "F", "E", "G"]) }
];

const musicNotes = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440.0,
  B: 493.88
};

const curriculum = {
  tiny: ["Colors", "Shapes", "Sounds", "Big/Small"],
  little: ["Letters", "Counting", "Patterns", "Rhymes"],
  big: ["Math", "Spelling", "Vocabulary", "Time", "Science"]
};

const state = {
  age: "tiny",
  gameId: "color-pop",
  stars: 0,
  totalStars: readNumber("brightstepsTotalStars", 0),
  nextMilestone: readNumber("brightstepsNextMilestone", 50),
  progress: readJson("brightstepsProgress", {}),
  childName: readStoredText("brightstepsChildName"),
  nameSkipped: readStoredText("brightstepsNameSkipped") === "yes",
  settings: {
    childAge: readStoredText("brightstepsChildAge") || "4-6",
    sound: readStoredText("brightstepsSound") !== "off",
    language: readStoredText("brightstepsLanguage") || "en",
    difficulty: readStoredText("brightstepsDifficulty") || "normal",
    dailyLimit: readStoredText("brightstepsDailyLimit") || "20",
    paidUnlock: readStoredText("brightstepsPaidUnlock") === "yes"
  },
  round: {},
  recent: {},
  memory: { open: [], matched: [] },
  trace: { next: 1, done: [] },
  star: { target: 0, tapped: 0 },
  bubble: { target: "", popped: 0, goal: 10 },
  path: { next: 1, done: [] },
  quest: { step: 0, gems: 0, round: null },
  gum: { target: "", popped: 0 },
  runner: { score: 0, coins: 0, level: "easy", round: null, jumping: false },
  robot: { built: [], round: null, level: 1 },
  space: { rescued: 0, mission: 1, round: null },
  dino: { bones: [], round: null, fossil: 0 },
  arrowPuzzle: { level: 1, position: null, moves: 0 },
  waterSolver: { level: 1, tubes: null, selected: null, moves: 0 },
  lineSort: { level: 1, board: null, selected: null, moves: 0 },
  puzzle2048: { board: [], score: 0 },
  buddy: { mood: "happy", phrase: "Hello, friend!", stars: 0 },
  music: { song: 0, next: 0, instrument: "toy" },
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
const parentEntry = document.querySelector("#parentEntry");
const dailyPath = document.querySelector("#dailyPath");
const modalRoot = document.querySelector("#modalRoot");
const greetingLine = document.querySelector("#greetingLine");
const editChildName = document.querySelector("#editChildName");
let deferredInstallPrompt = null;
let buddyAudioUrl = "";
let musicAudioContext = null;

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

parentEntry.addEventListener("click", () => showParentGate());
editChildName.addEventListener("click", () => showNameSetup());

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
    state.gum = { target: "", popped: 0 };
    state.runner = { score: 0, coins: 0, level: "easy", round: null, jumping: false };
    state.robot = { built: [], round: null, level: 1 };
    state.space = { rescued: 0, mission: 1, round: null };
    state.dino = { bones: [], round: null, fossil: 0 };
    state.arrowPuzzle = { level: 1, position: null, moves: 0 };
    state.waterSolver = { level: 1, tubes: null, selected: null, moves: 0 };
    state.lineSort = { level: 1, board: null, selected: null, moves: 0 };
    state.puzzle2048 = { board: [], score: 0 };
    state.buddy = { mood: "happy", phrase: "Hello, friend!", stars: 0 };
    state.music = { song: 0, next: 0, instrument: "toy" };
    state.word = { target: "", slots: [] };
    state.balloon = { target: "", slots: [] };
    render();
  });
});

function currentGame() {
  return games[state.age].find((game) => game.id === state.gameId);
}

function speak(text) {
  if (!state.settings.sound) return;
  if (window.BrightStepsVoice && typeof window.BrightStepsVoice.speak === "function") {
    try {
      if (window.BrightStepsVoice.speak(String(text))) return;
    } catch (error) {
      // Fall back to browser speech below when the native Android voice is unavailable.
    }
  }
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(text);
  const kidVoice = chooseKidVoice();
  if (kidVoice) voice.voice = kidVoice;
  voice.rate = 0.88;
  voice.pitch = 1.55;
  voice.volume = 1;
  window.speechSynthesis.speak(voice);
}

function chooseKidVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const preferred = [
    "junior", "child", "kid", "boy", "daniel", "alex", "samantha", "google us english"
  ];
  return voices.find((voice) => {
    const name = `${voice.name} ${voice.lang}`.toLowerCase();
    return preferred.some((keyword) => name.includes(keyword));
  }) || voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en")) || voices[0];
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => chooseKidVoice();
}

["pointerdown", "touchstart", "click"].forEach((eventName) => {
  window.addEventListener(eventName, unlockAudio, { passive: true });
});

function unlockAudio() {
  if (!state.settings.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!musicAudioContext) musicAudioContext = new AudioContext();
  if (musicAudioContext.state === "suspended") musicAudioContext.resume().catch(() => {});
}

function cheer(message) {
  state.stars += 1;
  state.totalStars += 1;
  recordProgress(currentGame());
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

function readJson(key, fallback) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key));
    return value && typeof value === "object" ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeNumber(key, value) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch {}
}

function writeJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function readStoredText(key) {
  try {
    return window.localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function writeStoredText(key, value) {
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
  renderDailyPath();
  updateGreeting();
  const game = currentGame();
  document.body.dataset.gameTheme = game.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  document.body.style.setProperty("--active-game-color", game.color);
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
  if (game.type === "talkingBuddy") renderTalkingBuddy();
  if (game.type === "bubbleGum") renderBubbleGum();
  if (game.type === "letters") renderLetters();
  if (game.type === "patterns") renderPatterns();
  if (game.type === "memory") renderMemory();
  if (game.type === "rhymes") renderRhymes();
  if (game.type === "rhymeBand") renderRhymeBand();
  if (game.type === "odd") renderOdd();
  if (game.type === "trace") renderTrace();
  if (game.type === "letterBalloons") renderLetterBalloons();
  if (game.type === "numberMuncher") renderNumberMuncher();
  if (game.type === "alphabetTrain") renderAlphabetTrain();
  if (game.type === "pathQuest") renderPathQuest();
  if (game.type === "photoRunner") renderPhotoRunner();
  if (game.type === "robotBuilder") renderRobotBuilder();
  if (game.type === "spaceRescue") renderSpaceRescue();
  if (game.type === "dinoDig") renderDinoDig();
  if (game.type === "arrowPuzzle") renderArrowPuzzle();
  if (game.type === "waterSolver") renderWaterSolver();
  if (game.type === "lineSort") renderLineSort();
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
  if (game.type === "junior2048") renderJunior2048();
  maybeShowNameSetup();
  maybeSpeakOpeningGreeting();
}

function greetingForDate(date = new Date()) {
  const hour = date.getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

function childDisplayName() {
  return (state.childName || "").trim() || "friend";
}

function openingGreetingText() {
  return `${greetingForDate()}, ${childDisplayName()}`;
}

function updateGreeting() {
  if (!greetingLine) return;
  greetingLine.textContent = openingGreetingText();
  if (editChildName) editChildName.textContent = state.childName ? "Change name" : "Set name";
}

function maybeShowNameSetup() {
  if (state.childName || state.nameSkipped || modalRoot.innerHTML) return;
  window.setTimeout(() => showNameSetup(), 250);
}

function maybeSpeakOpeningGreeting() {
  if (!state.childName) return;
  const today = todayKey();
  const sessionKey = `brightstepsGreetingSpoken-${today}`;
  try {
    if (window.sessionStorage.getItem(sessionKey) === "yes") return;
    window.sessionStorage.setItem(sessionKey, "yes");
  } catch {}
  window.setTimeout(() => speak(openingGreetingText()), 450);
}

function showNameSetup() {
  modalRoot.hidden = false;
  modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <section class="parent-modal name-modal" role="dialog" aria-modal="true" aria-label="Child name setup">
        <h2>Who is playing?</h2>
        <p class="modal-muted">Add the child's first name for a friendly greeting. It stays only on this device.</p>
        <label class="gate-field">
          <span>Child name</span>
          <input id="childNameInput" autocomplete="off" maxlength="24" value="${escapeAttribute(state.childName)}" placeholder="Shaurya">
        </label>
        <p class="feedback" id="nameFeedback"></p>
        <div class="name-actions">
          <button class="tool-button" id="saveChildName">Start playing</button>
          <button class="mini-button" id="skipChildName">Skip</button>
        </div>
      </section>
    </div>
  `;
  const input = modalRoot.querySelector("#childNameInput");
  input.focus();
  modalRoot.querySelector("#saveChildName").addEventListener("click", saveChildName);
  modalRoot.querySelector("#skipChildName").addEventListener("click", skipChildName);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveChildName();
  });
}

function saveChildName() {
  const input = modalRoot.querySelector("#childNameInput");
  const feedback = modalRoot.querySelector("#nameFeedback");
  const name = normalizeChildName(input.value);
  if (!name) {
    if (feedback) feedback.textContent = "Please add a name";
    return;
  }
  state.childName = name;
  state.nameSkipped = false;
  writeStoredText("brightstepsChildName", name);
  writeStoredText("brightstepsNameSkipped", "no");
  closeParentModal();
  updateGreeting();
  speak(openingGreetingText());
}

function skipChildName() {
  state.nameSkipped = true;
  writeStoredText("brightstepsNameSkipped", "yes");
  closeParentModal();
  updateGreeting();
}

function normalizeChildName(value) {
  return String(value || "")
    .replace(/[^a-zA-Z \-']/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 24);
}

function escapeAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderChrome() {
  document.querySelectorAll(".age-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.age === state.age);
  });

  gameList.innerHTML = games[state.age].map((game) => `
    <button class="game-button ${game.id === state.gameId ? "is-active" : ""}" data-game="${game.id}" style="--game-color:${game.color}">
      <span class="game-art" aria-hidden="true">${gameVisual(game)}</span>
      <span>
        <span class="game-category">${game.category}</span>
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
      state.gum = { target: "", popped: 0 };
      state.runner = { score: 0, coins: 0, level: "easy", round: null, jumping: false };
      state.robot = { built: [], round: null, level: 1 };
      state.space = { rescued: 0, mission: 1, round: null };
      state.dino = { bones: [], round: null, fossil: 0 };
      state.arrowPuzzle = { level: 1, position: null, moves: 0 };
      state.waterSolver = { level: 1, tubes: null, selected: null, moves: 0 };
      state.lineSort = { level: 1, board: null, selected: null, moves: 0 };
      state.puzzle2048 = { board: [], score: 0 };
      state.buddy = { mood: "happy", phrase: "Hello, friend!", stars: 0 };
      state.music = { song: 0, next: 0, instrument: "toy" };
      state.word = { target: "", slots: [] };
      state.balloon = { target: "", slots: [] };
      render();
    });
  });
}

function gameVisual(game) {
  const visuals = {
    colors: `<span class="mini-rainbow"><i></i><i></i><i></i></span>`,
    shapes: `<span class="mini-shapes"><i></i><i></i><i></i></span>`,
    count: `<span class="mini-bubbles"><i></i><i></i><i></i></span>`,
    animals: `<span class="mini-face"><i></i><b></b></span>`,
    sizes: `<span class="mini-towers"><i></i><i></i></span>`,
    feelings: `<span class="mini-smile"><i></i><b></b></span>`,
    shapeCatcher: `<span class="mini-catcher"><i></i><b></b></span>`,
    starTap: `<span class="mini-star">★</span>`,
    bubbleGarden: `<span class="mini-bubbles garden"><i></i><i></i><i></i></span>`,
    talkingBuddy: `<span class="mini-buddy"><i></i><b></b></span>`,
    bubbleGum: `<span class="mini-gum"><i></i><b></b></span>`,
    letters: `<span class="mini-letter">A</span>`,
    patterns: `<span class="mini-pattern"><i></i><i></i><i></i></span>`,
    memory: `<span class="mini-cards"><i></i><i></i></span>`,
    rhymes: `<span class="mini-rhyme"><i></i><b></b></span>`,
    rhymeBand: `<span class="mini-piano"><i></i><i></i><i></i></span>`,
    odd: `<span class="mini-odd"><i></i><i></i><b></b></span>`,
    trace: `<span class="mini-path"><i></i><i></i><i></i></span>`,
    letterBalloons: `<span class="mini-balloon">B</span>`,
    numberMuncher: `<span class="mini-monster"><i></i><b></b></span>`,
    alphabetTrain: `<span class="mini-train"><i></i><i></i></span>`,
    pathQuest: `<span class="mini-map"><i></i><i></i><b></b></span>`,
    photoRunner: `<span class="mini-runner"><i></i><b></b></span>`,
    robotBuilder: `<span class="mini-robot"><i></i><b></b></span>`,
    spaceRescue: `<span class="mini-rocket"><i></i><b></b></span>`,
    dinoDig: `<span class="mini-dino"><i></i><b></b></span>`,
    arrowPuzzle: `<span class="mini-arrows"><i></i><b></b></span>`,
    waterSolver: `<span class="mini-water"><i></i><b></b></span>`,
    lineSort: `<span class="mini-lines"><i></i><i></i><i></i></span>`,
    math: `<span class="mini-math">+</span>`,
    words: `<span class="mini-book"><i></i><b></b></span>`,
    sort: `<span class="mini-sort"><i></i><b></b></span>`,
    clock: `<span class="mini-clock"><i></i><b></b></span>`,
    skip: `<span class="mini-hop"><i></i><i></i><i></i></span>`,
    vocab: `<span class="mini-book"><i></i><b></b></span>`,
    spellingBalloons: `<span class="mini-balloon">S</span>`,
    rocketMath: `<span class="mini-rocket"><i></i><b></b></span>`,
    wordComets: `<span class="mini-comet"><i></i><b></b></span>`,
    questIsland: `<span class="mini-island"><i></i><b></b></span>`,
    junior2048: `<span class="mini-2048">2</span>`
  };
  return visuals[game.type] || `<span class="mini-letter">${game.icon}</span>`;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function recordProgress(game) {
  const skill = skillMap[game.category] || game.category;
  const today = todayKey();
  const progress = state.progress;
  progress.totalStars = (progress.totalStars || 0) + 1;
  progress.skills = progress.skills || {};
  progress.skills[skill] = (progress.skills[skill] || 0) + 1;
  progress.games = progress.games || {};
  progress.games[game.id] = (progress.games[game.id] || 0) + 1;
  progress.days = progress.days || {};
  progress.days[today] = (progress.days[today] || 0) + 1;
  writeJson("brightstepsProgress", progress);
  renderDailyPath();
}

function renderDailyPath() {
  const todaysGames = games[state.age].slice(0, 3);
  const completed = todaysGames.filter((game) => state.progress.games && state.progress.games[game.id]).length;
  dailyPath.innerHTML = `
    <h2>Daily path</h2>
    <div class="daily-meter"><span style="width:${(completed / todaysGames.length) * 100}%"></span></div>
    <p>${completed} / ${todaysGames.length} today</p>
    <div class="daily-list">
      ${todaysGames.map((game) => `
        <button class="daily-chip ${state.progress.games && state.progress.games[game.id] ? "is-done" : ""}" data-daily-game="${game.id}">
          ${game.title}
        </button>
      `).join("")}
    </div>
  `;
  dailyPath.querySelectorAll("[data-daily-game]").forEach((button) => {
    button.addEventListener("click", () => {
      state.gameId = button.dataset.dailyGame;
      state.stars = 0;
      render();
    });
  });
}

function showParentGate() {
  modalRoot.hidden = false;
  modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <section class="parent-modal" role="dialog" aria-modal="true" aria-label="Parent gate">
        <button class="modal-close" id="closeParentModal" aria-label="Close">x</button>
        <h2>Parent gate</h2>
        <p class="modal-muted">Solve this to enter parent area.</p>
        <label class="gate-field">
          <span>7 + 5 = ?</span>
          <input id="gateAnswer" inputmode="numeric" autocomplete="off">
        </label>
        <p class="feedback" id="gateFeedback"></p>
        <button class="tool-button" id="enterParentArea">Enter</button>
      </section>
    </div>
  `;
  modalRoot.querySelector("#closeParentModal").addEventListener("click", closeParentModal);
  modalRoot.querySelector("#enterParentArea").addEventListener("click", () => {
    const answer = modalRoot.querySelector("#gateAnswer").value.trim();
    if (answer === "12") {
      renderParentDashboard();
    } else {
      modalRoot.querySelector("#gateFeedback").textContent = "Try again";
    }
  });
}

function closeParentModal() {
  modalRoot.hidden = true;
  modalRoot.innerHTML = "";
}

function renderParentDashboard() {
  const skills = Object.entries(state.progress.skills || {}).sort((a, b) => b[1] - a[1]);
  modalRoot.innerHTML = `
    <div class="modal-backdrop">
      <section class="parent-modal parent-dashboard" role="dialog" aria-modal="true" aria-label="Parent dashboard">
        <button class="modal-close" id="closeParentModal" aria-label="Close">x</button>
        <h2>Parent dashboard</h2>
        <div class="parent-grid">
          <article>
            <h3>Progress summary</h3>
            <p><strong>${state.totalStars}</strong> total stars</p>
            <p><strong>${Object.keys(state.progress.days || {}).length}</strong> learning days</p>
            <div class="skill-list">
              ${skills.length ? skills.map(([skill, count]) => `<span>${skill}<b>${count}</b></span>`).join("") : "<p>No progress yet.</p>"}
            </div>
          </article>
          <article>
            <h3>Daily learning path</h3>
            <p>Age 1-3: ${curriculum.tiny.join(", ")}</p>
            <p>Age 4-6: ${curriculum.little.join(", ")}</p>
            <p>Age 7-9: ${curriculum.big.join(", ")}</p>
          </article>
          <article>
            <h3>Settings</h3>
            <label>Child age
              <select id="settingAge">
                ${["1-3", "4-6", "7-9"].map((age) => `<option ${state.settings.childAge === age ? "selected" : ""}>${age}</option>`).join("")}
              </select>
            </label>
            <label>Language
              <select id="settingLanguage">
                <option value="en" ${state.settings.language === "en" ? "selected" : ""}>English</option>
                <option value="hi" ${state.settings.language === "hi" ? "selected" : ""}>Hindi</option>
              </select>
            </label>
            <label>Difficulty
              <select id="settingDifficulty">
                ${["easy", "normal", "hard"].map((item) => `<option value="${item}" ${state.settings.difficulty === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
            <label>Daily time limit
              <select id="settingDailyLimit">
                ${["10", "20", "30"].map((item) => `<option value="${item}" ${state.settings.dailyLimit === item ? "selected" : ""}>${item} min</option>`).join("")}
              </select>
            </label>
            <label class="check-row"><input id="settingSound" type="checkbox" ${state.settings.sound ? "checked" : ""}> Sound on</label>
          </article>
          <article>
            <h3>Privacy policy</h3>
            ${privacyPolicyMarkup()}
          </article>
          <article>
            <h3>Ads and unlock</h3>
            <p>No ads are enabled in this version. A future one-time parent-gated paid unlock can add all games, badges, certificates, and progress tools.</p>
          </article>
          <article>
            <h3>Support</h3>
            <p>Contact/support: parent support can be added here before store release.</p>
            <button class="tool-button" id="printCertificate">Print certificate</button>
            <button class="danger-button" id="resetProgress">Reset progress</button>
          </article>
        </div>
      </section>
    </div>
  `;
  modalRoot.querySelector("#closeParentModal").addEventListener("click", closeParentModal);
  bindParentSettings();
  modalRoot.querySelector("#resetProgress").addEventListener("click", resetProgress);
  modalRoot.querySelector("#printCertificate").addEventListener("click", printCertificate);
}

function privacyPolicyMarkup() {
  return `
    <ul class="privacy-list">
      <li>We do not collect personal information from children.</li>
      <li>We do not require login.</li>
      <li>We do not collect location.</li>
      <li>We do not use camera, contacts, or personal identifiers.</li>
      <li>Microphone is used only inside Talking Buddy when a parent allows it, and recordings stay on the device during play.</li>
      <li>An optional child first name can be saved for greetings, and it stays locally on the device.</li>
      <li>Progress is stored locally on the device.</li>
      <li>No third-party analytics or third-party advertising are enabled in this version.</li>
    </ul>
  `;
}

function bindParentSettings() {
  const update = () => {
    state.settings.childAge = modalRoot.querySelector("#settingAge").value;
    state.settings.language = modalRoot.querySelector("#settingLanguage").value;
    state.settings.difficulty = modalRoot.querySelector("#settingDifficulty").value;
    state.settings.dailyLimit = modalRoot.querySelector("#settingDailyLimit").value;
    state.settings.sound = modalRoot.querySelector("#settingSound").checked;
    writeStoredText("brightstepsChildAge", state.settings.childAge);
    writeStoredText("brightstepsLanguage", state.settings.language);
    writeStoredText("brightstepsDifficulty", state.settings.difficulty);
    writeStoredText("brightstepsDailyLimit", state.settings.dailyLimit);
    writeStoredText("brightstepsSound", state.settings.sound ? "on" : "off");
  };
  modalRoot.querySelectorAll("select, #settingSound").forEach((input) => input.addEventListener("change", update));
}

function resetProgress() {
  state.progress = {};
  state.totalStars = 0;
  state.nextMilestone = 50;
  writeJson("brightstepsProgress", state.progress);
  writeNumber("brightstepsTotalStars", 0);
  writeNumber("brightstepsNextMilestone", 50);
  render();
  renderParentDashboard();
}

function printCertificate() {
  const certificate = window.open("", "_blank");
  if (!certificate) return;
  certificate.document.write(`
    <html><head><title>BrightSteps Certificate</title><style>body{font-family:Arial,sans-serif;display:grid;place-items:center;min-height:100vh;background:#fff8df}.cert{border:8px solid #3f8cff;padding:48px;text-align:center;max-width:720px}h1{font-size:42px}p{font-size:22px}</style></head>
    <body><section class="cert"><h1>BrightSteps Learning Star</h1><p>Completed ${state.totalStars} learning stars.</p><p>Keep learning every day.</p></section><script>window.print()</script></body></html>
  `);
  certificate.document.close();
}

function shell(prompt, extra = "") {
  const game = currentGame();
  activity.innerHTML = `
    <div class="prompt-row">
      <div class="prompt-mascot" aria-hidden="true">${gameMascot(game)}</div>
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

function gameMascot(game) {
  const type = game && game.type;
  if (["photoRunner", "arrowPuzzle", "pathQuest"].includes(type)) return `<span class="scene-mascot hero-car"><i></i><b></b></span>`;
  if (["robotBuilder", "spaceRescue", "rocketMath"].includes(type)) return `<span class="scene-mascot robo-pal"><i></i><b></b></span>`;
  if (["dinoDig", "animals"].includes(type)) return `<span class="scene-mascot dino-pal"><i></i><b></b></span>`;
  if (["rhymeBand", "rhyme-time", "rhymes"].includes(type)) return `<span class="scene-mascot music-pal"><i></i><b></b></span>`;
  if (["waterSolver", "bubbleGarden", "bubbleGum", "count"].includes(type)) return `<span class="scene-mascot bubble-pal"><i></i><b></b></span>`;
  if (["lineSort", "patterns", "memory", "junior2048"].includes(type)) return `<span class="scene-mascot puzzle-pal"><i></i><b></b></span>`;
  return `<span class="scene-mascot star-pal"><i></i><b></b></span>`;
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
          <span class="cute-animal is-${animal.face}" aria-hidden="true"><i></i><b></b></span>
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
    { name: "happy", face: "happy" },
    { name: "sad", face: "sad" },
    { name: "calm", face: "calm" },
    { name: "surprised", face: "surprised" }
  ];
  const target = pickFresh("feelings", feelings, (feeling) => feeling.name);
  shell(`Find ${target.name}`, `
    <div class="choice-grid">
      ${shuffle(feelings).map((feeling) => `
        <button class="choice-button" data-answer="${feeling.name}">
          <span class="feeling-card is-${feeling.face}" aria-hidden="true"><i></i><b></b></span>
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
  const choices = ensureColorChoices(state.bubble.target, 16);
  shell(`Pop ${state.bubble.target} bubbles`, `
    <div class="quest-progress">
      <span>${state.bubble.popped} / ${state.bubble.goal}</span>
      <span class="progress-track"><span style="width:${(state.bubble.popped / state.bubble.goal) * 100}%"></span></span>
    </div>
    <div class="bubble-garden">
      ${shuffle(choices).map((colorName, index) => {
        const color = palettes.find((item) => item.name === colorName);
        return `
          <button class="quest-bubble" style="--bubble-x:${6 + (index % 4) * 23}%;--bubble-y:${10 + Math.floor(index / 4) * 21}%;--bubble-delay:${index * -0.3}s;--bubble-color:${color.value}" data-bubble="${colorName}" aria-label="${colorName} bubble">
            <span>${colorName[0].toUpperCase()}</span>
          </button>
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

function renderTalkingBuddy() {
  const moodWords = {
    happy: "I am happy!",
    dance: "Dance time!",
    sleepy: "I feel sleepy.",
    giggle: "That tickles!"
  };
  shell("Talk with your buddy", `
    <div class="buddy-game">
      <div class="buddy-stage">
        <div class="talking-buddy is-${state.buddy.mood}" id="talkingBuddy" aria-hidden="true">
          <span class="buddy-ear left-ear"></span>
          <span class="buddy-ear right-ear"></span>
          <span class="buddy-face">
            <span class="buddy-eye left-eye"></span>
            <span class="buddy-eye right-eye"></span>
            <span class="buddy-mouth"></span>
          </span>
          <span class="buddy-arm left-arm"></span>
          <span class="buddy-arm right-arm"></span>
          <span class="buddy-foot left-foot"></span>
          <span class="buddy-foot right-foot"></span>
        </div>
        <div class="buddy-bubble">${state.buddy.phrase}</div>
      </div>
      <div class="buddy-controls">
        <label class="buddy-input">
          <span>Say something</span>
          <input id="buddyPhrase" value="${state.buddy.phrase.replace(/"/g, "&quot;")}" maxlength="42">
        </label>
        <button class="tool-button" id="buddyMic">Mic</button>
        <button class="tool-button" id="buddyRepeat">Repeat</button>
      </div>
      <div class="buddy-actions">
        <button class="choice-button buddy-action" data-buddy="happy"><span class="label">Smile</span></button>
        <button class="choice-button buddy-action" data-buddy="dance"><span class="label">Dance</span></button>
        <button class="choice-button buddy-action" data-buddy="giggle"><span class="label">Tickle</span></button>
        <button class="choice-button buddy-action" data-buddy="sleepy"><span class="label">Sleep</span></button>
      </div>
      <div class="buddy-lessons">
        ${["red", "blue", "green", "yellow"].map((word) => `<button class="tile-button" data-buddy-word="${word}">${word}</button>`).join("")}
      </div>
    </div>
  `);
  const input = activity.querySelector("#buddyPhrase");
  input.addEventListener("input", () => {
    state.buddy.phrase = input.value.trim() || "Hello!";
    const bubble = activity.querySelector(".buddy-bubble");
    if (bubble) bubble.textContent = state.buddy.phrase;
  });
  activity.querySelector("#buddyRepeat").addEventListener("click", () => {
    if (buddyAudioUrl) {
      playBuddyRecording();
    } else {
      speakBuddy(state.buddy.phrase);
    }
    cheer("Buddy talked");
  });
  activity.querySelector("#buddyMic").addEventListener("click", () => recordBuddyVoice());
  activity.querySelectorAll("[data-buddy]").forEach((button) => {
    button.addEventListener("click", () => {
      state.buddy.mood = button.dataset.buddy;
      state.buddy.phrase = moodWords[state.buddy.mood];
      cheer("Buddy reacts");
      renderTalkingBuddy();
      speakBuddy(state.buddy.phrase);
    });
  });
  activity.querySelectorAll("[data-buddy-word]").forEach((button) => {
    button.addEventListener("click", () => {
      state.buddy.mood = "happy";
      state.buddy.phrase = `I found ${button.dataset.buddyWord}!`;
      cheer("Word learned");
      renderTalkingBuddy();
      speakBuddy(state.buddy.phrase);
    });
  });
}

function speakBuddy(text) {
  const buddy = activity.querySelector("#talkingBuddy");
  if (buddy) {
    buddy.classList.add("is-talking");
    setTimeout(() => buddy.classList.remove("is-talking"), 950);
  }
  speak(text);
}

function listenToBuddy() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const feedback = document.querySelector("#feedback");
  if (!Recognition) {
    recordBuddyVoice();
    return;
  }
  const recognition = new Recognition();
  let heardSpeech = false;
  let usedRecorderFallback = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  if (feedback) feedback.textContent = "Listening...";
  state.buddy.mood = "happy";
  const buddy = activity.querySelector("#talkingBuddy");
  if (buddy) buddy.classList.add("is-listening");
  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.trim();
    if (!transcript) return;
    heardSpeech = true;
    state.buddy.phrase = transcript;
    const input = activity.querySelector("#buddyPhrase");
    const bubble = activity.querySelector(".buddy-bubble");
    if (input) input.value = transcript;
    if (bubble) bubble.textContent = transcript;
    if (feedback) feedback.textContent = "I heard you";
    speakBuddy(transcript);
    cheer("Buddy listened");
  });
  recognition.addEventListener("error", () => {
    usedRecorderFallback = true;
    recordBuddyVoice();
  });
  recognition.addEventListener("end", () => {
    const activeBuddy = activity.querySelector("#talkingBuddy");
    if (activeBuddy) activeBuddy.classList.remove("is-listening");
    if (!heardSpeech && !usedRecorderFallback) recordBuddyVoice();
  });
  try {
    recognition.start();
  } catch {
    recordBuddyVoice();
  }
}

async function recordBuddyVoice() {
  const feedback = document.querySelector("#feedback");
  const buddy = activity.querySelector("#talkingBuddy");
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    if (feedback) feedback.textContent = "Microphone recording is not available here";
    showSillyWrong();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mimeType = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "";
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    const chunks = [];
    state.buddy.phrase = "I am listening... keep talking!";
    const bubble = activity.querySelector(".buddy-bubble");
    if (bubble) bubble.textContent = state.buddy.phrase;
    if (feedback) feedback.textContent = "Listening for 6 seconds...";
    if (buddy) buddy.classList.add("is-listening");
    recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) chunks.push(event.data);
    });
    recorder.addEventListener("stop", () => {
      stream.getTracks().forEach((track) => track.stop());
      if (buddy) buddy.classList.remove("is-listening");
      const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
      if (buddyAudioUrl) URL.revokeObjectURL(buddyAudioUrl);
      buddyAudioUrl = URL.createObjectURL(blob);
      state.buddy.phrase = "I heard your voice!";
      const currentBubble = activity.querySelector(".buddy-bubble");
      if (currentBubble) currentBubble.textContent = state.buddy.phrase;
      if (feedback) feedback.textContent = "Repeating...";
      playBuddyRecording();
      cheer("Buddy listened");
    });
    recorder.start();
    setTimeout(() => {
      if (recorder.state === "recording") recorder.stop();
    }, 6000);
  } catch {
    if (feedback) feedback.textContent = "Please allow microphone";
    showSillyWrong();
  }
}

function playBuddyRecording() {
  if (!buddyAudioUrl) return;
  const buddy = activity.querySelector("#talkingBuddy");
  const audio = new Audio(buddyAudioUrl);
  if (buddy) buddy.classList.add("is-talking");
  audio.addEventListener("ended", () => {
    const activeBuddy = activity.querySelector("#talkingBuddy");
    if (activeBuddy) activeBuddy.classList.remove("is-talking");
  });
  audio.play().catch(() => {
    const feedback = document.querySelector("#feedback");
    if (feedback) feedback.textContent = "Tap Mic again to repeat";
    if (buddy) buddy.classList.remove("is-talking");
  });
}

function renderBubbleGum() {
  if (!state.gum.target) {
    state.gum.target = pickFresh("bubbleGum", palettes, (color) => color.name).name;
    state.gum.popped = 0;
  }
  const goal = 18;
  const choices = ensureColorChoices(state.gum.target, 20);
  shell(`Pop ${state.gum.target} gum bubbles`, `
    <div class="quest-progress">
      <span>${state.gum.popped} / ${goal} pops</span>
      <span class="progress-track gum-track"><span style="width:${(state.gum.popped / goal) * 100}%"></span></span>
    </div>
    <div class="gum-stage">
      ${shuffle(choices).map((colorName, index) => {
        const color = palettes.find((item) => item.name === colorName);
        return `
          <button class="gum-bubble" style="--gum-x:${5 + (index % 5) * 19}%;--gum-y:${9 + Math.floor(index / 5) * 21}%;--gum-delay:${index * -0.2}s;--gum-color:${color.value}" data-gum="${colorName}" aria-label="${colorName} gum bubble">
            <span>${colorName[0].toUpperCase()}</span>
          </button>
        `;
      }).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-gum]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.gum === state.gum.target) {
        button.classList.add("is-popped");
        state.gum.popped += 1;
        cheer(state.gum.popped >= goal ? "Mega pop" : "Pop");
        if (state.gum.popped >= goal) {
          state.gum = { target: "", popped: 0 };
          setTimeout(renderBubbleGum, 900);
        } else {
          setTimeout(renderBubbleGum, 260);
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function ensureColorChoices(target, count) {
  const base = Array.from({ length: count }, (_, index) => palettes[(index + Math.floor(index / 3)) % palettes.length].name);
  const minimumTargets = Math.min(5, count);
  let currentTargetCount = base.filter((color) => color === target).length;
  for (let index = 0; currentTargetCount < minimumTargets && index < base.length; index += 1) {
    if (base[index] !== target) {
      base[index] = target;
      currentTargetCount += 1;
    }
  }
  return shuffle(base);
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

function renderRhymeBand() {
  const song = rhymeSongs[state.music.song] || rhymeSongs[0];
  const targetNote = song.notes[state.music.next];
  shell(`Play ${song.title}: tap ${targetNote}`, `
    <div class="music-game">
      <div class="music-toolbar">
        <label>
          <span>Rhyme</span>
          <select id="songPicker">
            ${rhymeSongs.map((item, index) => `<option value="${index}" ${index === state.music.song ? "selected" : ""}>${item.title}</option>`).join("")}
          </select>
        </label>
        <div class="music-toggle" aria-label="Choose instrument">
          <button class="${state.music.instrument === "toy" ? "is-active" : ""}" data-instrument="toy">Toy</button>
          <button class="${state.music.instrument === "piano" ? "is-active" : ""}" data-instrument="piano">Piano</button>
          <button class="${state.music.instrument === "guitar" ? "is-active" : ""}" data-instrument="guitar">Guitar</button>
        </div>
      </div>
      <div class="song-card">
        <strong>${song.words}</strong>
        <span>${state.music.next} / ${song.notes.length} notes</span>
      </div>
      <button class="sound-unlock" id="musicSoundUnlock">Enable sound</button>
      <div class="note-road">
        ${song.notes.map((note, index) => `
          <span class="${index < state.music.next ? "is-played" : ""} ${index === state.music.next ? "is-next" : ""}">${note}</span>
        `).join("")}
      </div>
      ${musicBoard(targetNote)}
    </div>
  `);
  activity.querySelector("#songPicker").addEventListener("change", (event) => {
    state.music.song = Number(event.target.value);
    state.music.next = 0;
    renderRhymeBand();
  });
  activity.querySelectorAll("[data-instrument]").forEach((button) => {
    button.addEventListener("click", () => {
      state.music.instrument = button.dataset.instrument;
      renderRhymeBand();
    });
  });
  activity.querySelector("#musicSoundUnlock").addEventListener("pointerdown", (event) => {
    event.preventDefault();
    state.settings.sound = true;
    writeStoredText("brightstepsSound", "on");
    playTone("C", "toy");
    const feedback = document.querySelector("#feedback");
    if (feedback) feedback.textContent = "Sound on";
  });
  activity.querySelectorAll("[data-note]").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      playRhymeNote(button, song);
    });
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") playRhymeNote(button, song);
    });
  });
}

function musicBoard(targetNote) {
  if (state.music.instrument === "guitar") return guitarBoard(targetNote);
  if (state.music.instrument === "piano") return pianoBoard(targetNote);
  return toyMusicBoard(targetNote);
}

function toyMusicBoard(targetNote) {
  return `
    <div class="toy-music-board" aria-label="Toy piano and xylophone board">
      <div class="toy-bars">
        ${Object.keys(musicNotes).map((note, index) => `
          <button class="toy-bar bar-${index + 1} ${note === targetNote ? "is-target" : ""}" style="--bar-size:${100 - index * 6}%" data-note="${note}">
            <span>${note}</span>
          </button>
        `).join("")}
      </div>
      <div class="toy-piano">
        ${Object.keys(musicNotes).map((note) => `
          <button class="toy-piano-key ${note === targetNote ? "is-target" : ""}" data-note="${note}">
            <span>${note}</span>
          </button>
        `).join("")}
      </div>
      <div class="toy-speaker" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  `;
}

function pianoBoard(targetNote) {
  return `
    <div class="piano-board" aria-label="Piano board">
      ${Object.keys(musicNotes).map((note) => `
        <button class="piano-key ${note === targetNote ? "is-target" : ""}" data-note="${note}">
          <span>${note}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function guitarBoard(targetNote) {
  return `
    <div class="guitar-board" aria-label="Guitar board">
      <div class="guitar-neck" aria-hidden="true"></div>
      ${Object.keys(musicNotes).map((note, index) => `
        <button class="guitar-string ${note === targetNote ? "is-target" : ""}" style="--string-row:${index}" data-note="${note}">
          <span>${note}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function playRhymeNote(button, song) {
  const note = button.dataset.note;
  playTone(note, state.music.instrument);
  if (note === song.notes[state.music.next]) {
    button.classList.add("is-correct");
    state.music.next += 1;
    if (state.music.next >= song.notes.length) {
      cheer("Song complete");
      setTimeout(() => {
        state.music.next = 0;
        state.music.song = (state.music.song + 1) % rhymeSongs.length;
        renderRhymeBand();
      }, 850);
    } else {
      const feedback = document.querySelector("#feedback");
      if (feedback) feedback.textContent = "Nice note";
      setTimeout(renderRhymeBand, 280);
    }
  } else {
    markWrong(button);
  }
}

function playTone(note, instrument) {
  if (!state.settings.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext || !musicNotes[note]) return;
  if (!musicAudioContext) musicAudioContext = new AudioContext();
  const context = musicAudioContext;
  if (context.state === "suspended") context.resume();
  const oscillator = context.createOscillator();
  const overtone = context.createOscillator();
  const gain = context.createGain();
  const duration = instrument === "guitar" ? 0.55 : instrument === "toy" ? 0.72 : 0.38;
  oscillator.type = instrument === "guitar" ? "triangle" : instrument === "toy" ? "sine" : "sine";
  overtone.type = "sine";
  oscillator.frequency.value = musicNotes[note];
  overtone.frequency.value = musicNotes[note] * (instrument === "toy" ? 2 : 1.5);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(instrument === "toy" ? 0.28 : 0.22, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain);
  overtone.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  overtone.start();
  oscillator.stop(context.currentTime + duration + 0.04);
  overtone.stop(context.currentTime + duration + 0.04);
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

function renderPhotoRunner() {
  if (!state.runner.round) {
    state.runner.round = pickFresh(`photoRunner-${state.runner.level}`, runnerRoundsForLevel(state.runner.level), (round) => round.prompt);
  }
  const config = runnerLevelConfig(state.runner.level);
  const round = state.runner.round;
  const runnerPhoto = readStoredText("brightstepsRunnerPhoto");
  shell(`${config.name}: ${round.prompt}`, `
    <div class="runner-tools">
      <label class="runner-upload">
        <span>Runner photo</span>
        <input id="runnerPhotoInput" type="file" accept="image/*">
      </label>
      <span class="runner-score">Score ${state.runner.score} | Coins ${state.runner.coins}</span>
    </div>
    <div class="runner-levels" aria-label="Choose runner level">
      ${["easy", "medium", "hard"].map((level) => `
        <button class="tile-button ${state.runner.level === level ? "is-active-level" : ""}" data-runner-level="${level}">
          ${runnerLevelConfig(level).name}
        </button>
      `).join("")}
    </div>
    <div class="runner-stage adventure-runner" style="--runner-speed:${config.speed}s">
      <div class="runner-sky" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="runner-path" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="runner-track" aria-hidden="true"></div>
      <div class="runner-character ${state.runner.jumping ? "is-jumping" : ""}" id="runnerCharacter">
        ${runnerPhoto
          ? `<img class="runner-photo" src="${runnerPhoto}" alt="Uploaded runner">`
          : runnerMascot()}
      </div>
      <div class="runner-answers">
        ${shuffle(round.choices).map((choice, index) => `
          <button class="runner-token" style="--runner-delay:${index * -0.72}s;--runner-lane:${index % 3}" data-runner-answer="${choice}">
            ${choice}
          </button>
        `).join("")}
      </div>
      <div class="runner-coins" aria-hidden="true">
        ${Array.from({ length: config.coins }, (_, index) => `<button class="runner-coin" style="--coin-delay:${index * -0.48}s;--coin-lane:${index % 3}" data-runner-coin="1">$</button>`).join("")}
      </div>
      <div class="runner-obstacles" aria-hidden="true">
        ${Array.from({ length: config.obstacles }, (_, index) => `<button class="runner-obstacle" style="--obstacle-delay:${index * -0.9}s;--obstacle-lane:${(index + 1) % 3}" data-runner-obstacle="1">!</button>`).join("")}
      </div>
    </div>
    <button class="jump-button" id="jumpButton">Jump</button>
  `);
  const input = activity.querySelector("#runnerPhotoInput");
  input.addEventListener("change", () => saveRunnerPhoto(input));
  activity.querySelectorAll("[data-runner-level]").forEach((button) => {
    button.addEventListener("click", () => {
      state.runner.level = button.dataset.runnerLevel;
      state.runner.round = null;
      renderPhotoRunner();
    });
  });
  activity.querySelector("#jumpButton").addEventListener("click", () => {
    const character = activity.querySelector("#runnerCharacter");
    character.classList.remove("is-jumping");
    window.requestAnimationFrame(() => character.classList.add("is-jumping"));
    setTimeout(() => collectRunnerJump(round, config), 230);
  });
  activity.querySelectorAll("[data-runner-coin]").forEach((button) => {
    button.addEventListener("click", () => collectRunnerCoin(button));
  });
  activity.querySelectorAll("[data-runner-obstacle]").forEach((button) => {
    button.addEventListener("click", () => markWrong(button));
  });
  activity.querySelectorAll("[data-runner-answer]").forEach((button) => {
    button.addEventListener("click", () => collectRunnerAnswer(button, round, config));
  });
}

function collectRunnerJump(round, config) {
  const character = activity.querySelector("#runnerCharacter");
  if (!character) return;
  const characterBox = character.getBoundingClientRect();
  const jumpZone = {
    left: characterBox.left - 36,
    right: characterBox.right + 110,
    top: characterBox.top - 76,
    bottom: characterBox.bottom + 50
  };
  const candidates = [...activity.querySelectorAll("[data-runner-coin], [data-runner-answer], [data-runner-obstacle]")]
    .filter((item) => !item.classList.contains("is-collected") && item.offsetParent !== null)
    .map((item) => ({ item, box: item.getBoundingClientRect() }))
    .filter(({ box }) => boxesOverlap(jumpZone, box))
    .sort((a, b) => Math.abs(a.box.left - characterBox.right) - Math.abs(b.box.left - characterBox.right));

  if (!candidates.length) {
    const feedback = document.querySelector("#feedback");
    if (feedback) feedback.textContent = "Jump closer";
    return;
  }

  const target = candidates[0].item;
  if (target.dataset.runnerCoin) collectRunnerCoin(target);
  if (target.dataset.runnerAnswer) collectRunnerAnswer(target, round, config);
  if (target.dataset.runnerObstacle) markWrong(target);
}

function boxesOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function collectRunnerCoin(button) {
  if (button.classList.contains("is-collected")) return;
  state.runner.coins += 1;
  button.classList.add("is-collected");
  if (state.runner.coins % 5 === 0) cheer("Coin bonus");
  const feedback = document.querySelector("#feedback");
  if (feedback && state.runner.coins % 5 !== 0) feedback.textContent = "Coin";
  updateRunnerScore();
}

function collectRunnerAnswer(button, round, config) {
  if (button.classList.contains("is-collected")) return;
  if (button.dataset.runnerAnswer === round.answer) {
    state.runner.score += config.points;
    state.runner.round = null;
    button.classList.add("is-correct", "is-collected");
    cheer("Run score");
    setTimeout(renderPhotoRunner, 650);
  } else {
    markWrong(button);
  }
}

function updateRunnerScore() {
  const score = activity.querySelector(".runner-score");
  if (score) score.textContent = `Score ${state.runner.score} | Coins ${state.runner.coins}`;
}

function runnerLevelConfig(level) {
  const configs = {
    easy: { name: "Easy", speed: 7.2, obstacles: 2, coins: 5, points: 1 },
    medium: { name: "Medium", speed: 5.7, obstacles: 3, coins: 6, points: 2 },
    hard: { name: "Hard", speed: 4.35, obstacles: 4, coins: 7, points: 3 }
  };
  return configs[level] || configs.easy;
}

function runnerRoundsForLevel(level) {
  const easy = [
    { prompt: "Run to the word that starts with B", answer: "ball", choices: ["ball", "sun", "cat", "moon"] },
    { prompt: "Run to the word that starts with S", answer: "star", choices: ["leaf", "star", "fish", "book"] },
    { prompt: "Run to the color of grass", answer: "green", choices: ["blue", "red", "green", "yellow"] },
    { prompt: "Run to the animal word", answer: "tiger", choices: ["chair", "tiger", "cloud", "pencil"] }
  ];
  const medium = [
    { prompt: "Run to 5 + 3", answer: "8", choices: ["6", "7", "8", "9"] },
    { prompt: "Run to the next letter: A, B, C, ?", answer: "D", choices: ["D", "F", "B", "E"] },
    { prompt: "Run to the rhyme for cake", answer: "snake", choices: ["snake", "chair", "moon", "fish"] },
    { prompt: "Run to 12 - 4", answer: "8", choices: ["6", "8", "10", "12"] }
  ];
  const hard = [
    { prompt: "Run to 9 + 7", answer: "16", choices: ["14", "15", "16", "18"] },
    { prompt: "Run to the synonym for tiny", answer: "small", choices: ["wide", "small", "loud", "late"] },
    { prompt: "Run to the missing letter: M, N, O, ?", answer: "P", choices: ["P", "Q", "L", "R"] },
    { prompt: "Run to the word that means begin", answer: "start", choices: ["finish", "carry", "start", "sleep"] }
  ];
  if (level === "hard") return hard;
  if (level === "medium") return medium;
  return easy;
}

function saveRunnerPhoto(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      window.localStorage.setItem("brightstepsRunnerPhoto", String(reader.result));
    } catch {}
    renderPhotoRunner();
  });
  reader.readAsDataURL(file);
}

function renderRobotBuilder() {
  if (!state.robot.round) {
    state.robot.round = pickFresh("robotBuilder", robotRounds(), (round) => round.prompt);
  }
  const parts = ["head", "eyes", "arms", "wheels", "battery", "antenna", "buttons", "rocket"];
  const round = state.robot.round;
  shell(`Robot level ${state.robot.level}: ${round.prompt}`, `
    <div class="mission-progress">
      <span>${state.robot.built.length} / ${parts.length} parts</span>
      <span class="progress-track"><span style="width:${(state.robot.built.length / parts.length) * 100}%"></span></span>
    </div>
    <div class="robot-lab">
      <div class="robot-build" aria-label="Robot being built">
        <span class="robot-part robot-head ${state.robot.built.includes("head") ? "is-built" : ""}"></span>
        <span class="robot-part robot-eyes ${state.robot.built.includes("eyes") ? "is-built" : ""}"></span>
        <span class="robot-part robot-body ${state.robot.built.includes("battery") ? "is-built" : ""}"></span>
        <span class="robot-part robot-buttons ${state.robot.built.includes("buttons") ? "is-built" : ""}"></span>
        <span class="robot-part robot-arms ${state.robot.built.includes("arms") ? "is-built" : ""}"></span>
        <span class="robot-part robot-wheels ${state.robot.built.includes("wheels") ? "is-built" : ""}"></span>
        <span class="robot-part robot-antenna ${state.robot.built.includes("antenna") ? "is-built" : ""}"></span>
        <span class="robot-part robot-rocket ${state.robot.built.includes("rocket") ? "is-built" : ""}"></span>
      </div>
      <div class="robot-parts">
        ${shuffle(round.choices).map((choice) => `
          <button class="robot-chip" data-robot-choice="${choice}">
            <span>${choice}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `);
  activity.querySelectorAll("[data-robot-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.robotChoice === round.answer) {
        const nextPart = parts[state.robot.built.length];
        state.robot.built.push(nextPart);
        state.robot.round = null;
        playTone(["C", "D", "E", "G"][state.robot.built.length % 4], "toy");
        cheer(state.robot.built.length === parts.length ? "Robot launched" : "Part added");
        if (state.robot.built.length === parts.length) {
          state.robot.built = [];
          state.robot.level += 1;
          setTimeout(renderRobotBuilder, 900);
        } else {
          setTimeout(renderRobotBuilder, 450);
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function robotRounds() {
  return [
    { prompt: "find the letter after B", answer: "C", choices: ["A", "C", "D", "G"] },
    { prompt: "find 3 + 2", answer: "5", choices: ["4", "5", "6", "8"] },
    { prompt: "find the color of the sky", answer: "blue", choices: ["red", "blue", "green", "yellow"] },
    { prompt: "find the word that starts with R", answer: "robot", choices: ["moon", "robot", "fish", "apple"] },
    { prompt: "find the bigger number", answer: "9", choices: ["3", "6", "9", "4"] },
    { prompt: "finish A B C ?", answer: "D", choices: ["E", "D", "B", "F"] },
    { prompt: "find the shape with 3 sides", answer: "triangle", choices: ["circle", "square", "star", "triangle"] },
    { prompt: "find the rhyme for car", answer: "star", choices: ["star", "fish", "book", "tree"] },
    { prompt: "find 10 - 4", answer: "6", choices: ["5", "6", "7", "8"] },
    { prompt: "find the first letter of ball", answer: "B", choices: ["P", "B", "D", "M"] }
  ];
}

function renderSpaceRescue() {
  if (!state.space.round) {
    state.space.round = pickFresh("spaceRescue", spaceRounds(), (round) => round.prompt);
  }
  const round = state.space.round;
  const goal = 6;
  shell(`Mission ${state.space.mission}: ${round.prompt}`, `
    <div class="mission-progress">
      <span>${state.space.rescued} / ${goal} stars saved</span>
      <span class="progress-track"><span style="width:${(state.space.rescued / goal) * 100}%"></span></span>
    </div>
    <div class="space-stage">
      <div class="space-ship" aria-hidden="true"><span></span></div>
      <div class="space-stars" aria-hidden="true">
        ${Array.from({ length: 18 }, (_, index) => `<span style="--sx:${6 + (index * 17) % 88}%;--sy:${8 + (index * 23) % 76}%;--sd:${index * -0.18}s">*</span>`).join("")}
      </div>
      ${shuffle(round.choices).map((choice, index) => `
        <button class="space-rock" style="--rock-delay:${index * -0.85}s;--rock-lane:${index % 4}" data-space-choice="${choice}">
          ${choice}
        </button>
      `).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-space-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.spaceChoice === round.answer) {
        button.classList.add("is-rescued");
        state.space.rescued += 1;
        state.space.round = null;
        playTone(["G", "A", "B"][state.space.rescued % 3], "toy");
        cheer(state.space.rescued >= goal ? "Mission complete" : "Star rescued");
        if (state.space.rescued >= goal) {
          state.space.rescued = 0;
          state.space.mission += 1;
        }
        setTimeout(renderSpaceRescue, 650);
      } else {
        markWrong(button);
      }
    });
  });
}

function spaceRounds() {
  return [
    { prompt: "tap 4 + 3", answer: "7", choices: ["6", "7", "8", "9"] },
    { prompt: "tap the letter after M", answer: "N", choices: ["L", "N", "O", "P"] },
    { prompt: "tap the word that starts with S", answer: "sun", choices: ["bus", "cat", "sun", "hat"] },
    { prompt: "tap 8 - 3", answer: "5", choices: ["4", "5", "6", "7"] },
    { prompt: "tap the rhyme for moon", answer: "spoon", choices: ["spoon", "ball", "cake", "fish"] },
    { prompt: "tap the missing number 2, 4, ?", answer: "6", choices: ["5", "6", "7", "8"] },
    { prompt: "tap the color of banana", answer: "yellow", choices: ["blue", "yellow", "green", "red"] },
    { prompt: "tap the first sound in dog", answer: "D", choices: ["B", "D", "G", "T"] }
  ];
}

function renderDinoDig() {
  if (!state.dino.round) {
    state.dino.round = pickFresh("dinoDig", dinoRounds(), (round) => round.prompt);
  }
  const round = state.dino.round;
  const bones = ["skull", "neck", "spine", "tail", "leg1", "leg2", "claw1", "claw2"];
  shell(`Dino dig: ${round.prompt}`, `
    <div class="mission-progress">
      <span>${state.dino.bones.length} / ${bones.length} fossils</span>
      <span class="progress-track"><span style="width:${(state.dino.bones.length / bones.length) * 100}%"></span></span>
    </div>
    <div class="dino-dig">
      <div class="fossil-board" aria-label="Dinosaur fossil">
        ${bones.map((bone, index) => `<span class="fossil-bone bone-${index + 1} ${state.dino.bones.includes(bone) ? "is-found" : ""}"></span>`).join("")}
      </div>
      <div class="dig-choices">
        ${shuffle(round.choices).map((choice) => `
          <button class="dig-tile" data-dino-choice="${choice}">
            <span>${choice}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `);
  activity.querySelectorAll("[data-dino-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.dinoChoice === round.answer) {
        const nextBone = bones[state.dino.bones.length];
        state.dino.bones.push(nextBone);
        state.dino.round = null;
        playTone(["C", "E", "G", "A"][state.dino.bones.length % 4], "toy");
        cheer(state.dino.bones.length === bones.length ? "Dino complete" : "Fossil found");
        if (state.dino.bones.length === bones.length) {
          state.dino.bones = [];
          state.dino.fossil += 1;
          setTimeout(renderDinoDig, 950);
        } else {
          setTimeout(renderDinoDig, 500);
        }
      } else {
        markWrong(button);
      }
    });
  });
}

function dinoRounds() {
  return [
    { prompt: "dig number 6", answer: "6", choices: ["5", "6", "8", "9"] },
    { prompt: "dig the letter D", answer: "D", choices: ["B", "D", "P", "R"] },
    { prompt: "dig 2 + 5", answer: "7", choices: ["6", "7", "8", "9"] },
    { prompt: "dig the animal word", answer: "lion", choices: ["lion", "chair", "shoe", "moon"] },
    { prompt: "dig the shape with no corners", answer: "circle", choices: ["square", "triangle", "circle", "star"] },
    { prompt: "dig the missing letter X Y ?", answer: "Z", choices: ["W", "Z", "A", "V"] },
    { prompt: "dig the smaller number", answer: "3", choices: ["3", "7", "9", "5"] },
    { prompt: "dig the rhyme for log", answer: "dog", choices: ["dog", "sun", "cap", "tree"] }
  ];
}

function renderArrowPuzzle() {
  const level = arrowLevels()[state.arrowPuzzle.level - 1] || arrowLevels()[0];
  if (!state.arrowPuzzle.position) {
    state.arrowPuzzle.position = { ...level.start };
    state.arrowPuzzle.moves = 0;
  }
  const used = state.arrowPuzzle.moves;
  const left = level.maxMoves - used;
  shell(`Arrow level ${state.arrowPuzzle.level}: reach the star`, `
    <div class="puzzle-status">
      <span>Level ${state.arrowPuzzle.level} / 12</span>
      <span>${left} moves left</span>
    </div>
    <div class="arrow-play">
      <div class="arrow-grid" style="--grid-size:${level.size}">
        ${Array.from({ length: level.size * level.size }, (_, index) => {
          const row = Math.floor(index / level.size);
          const col = index % level.size;
          const key = `${row},${col}`;
          const isBlock = level.blocks.includes(key);
          const isGoal = row === level.goal.row && col === level.goal.col;
          const isPlayer = row === state.arrowPuzzle.position.row && col === state.arrowPuzzle.position.col;
          return `<span class="arrow-cell ${isBlock ? "is-block" : ""} ${isGoal ? "is-goal" : ""} ${isPlayer ? "is-player" : ""}">${isPlayer ? "car" : isGoal ? "*" : isBlock ? "" : ""}</span>`;
        }).join("")}
      </div>
      <div class="arrow-controls" aria-label="Move arrows">
        <button data-arrow-move="up">↑</button>
        <button data-arrow-move="left">←</button>
        <button data-arrow-move="right">→</button>
        <button data-arrow-move="down">↓</button>
      </div>
    </div>
  `);
  activity.querySelectorAll("[data-arrow-move]").forEach((button) => {
    button.addEventListener("click", () => moveArrowPlayer(button.dataset.arrowMove, level));
  });
}

function moveArrowPlayer(direction, level) {
  const deltas = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
  };
  const [dr, dc] = deltas[direction];
  const next = {
    row: state.arrowPuzzle.position.row + dr,
    col: state.arrowPuzzle.position.col + dc
  };
  const out = next.row < 0 || next.col < 0 || next.row >= level.size || next.col >= level.size;
  const blocked = level.blocks.includes(`${next.row},${next.col}`);
  if (out || blocked) {
    const feedback = document.querySelector("#feedback");
    if (feedback) feedback.textContent = "Blocked path";
    showSillyWrong();
    return;
  }
  state.arrowPuzzle.position = next;
  state.arrowPuzzle.moves += 1;
  if (next.row === level.goal.row && next.col === level.goal.col) {
    cheer("Puzzle solved");
    state.arrowPuzzle.level = state.arrowPuzzle.level === 12 ? 1 : state.arrowPuzzle.level + 1;
    state.arrowPuzzle.position = null;
    setTimeout(renderArrowPuzzle, 850);
    return;
  }
  if (state.arrowPuzzle.moves >= level.maxMoves) {
    markWrong(activity.querySelector(".arrow-grid"));
    state.arrowPuzzle.position = { ...level.start };
    state.arrowPuzzle.moves = 0;
    setTimeout(renderArrowPuzzle, 650);
    return;
  }
  renderArrowPuzzle();
}

function arrowLevels() {
  return [
    { size: 3, start: { row: 2, col: 0 }, goal: { row: 0, col: 2 }, blocks: [], maxMoves: 12 },
    { size: 3, start: { row: 2, col: 0 }, goal: { row: 0, col: 2 }, blocks: ["1,1"], maxMoves: 12 },
    { size: 4, start: { row: 3, col: 0 }, goal: { row: 0, col: 3 }, blocks: ["1,1", "2,2"], maxMoves: 12 },
    { size: 4, start: { row: 3, col: 1 }, goal: { row: 0, col: 2 }, blocks: ["1,0", "1,1", "2,3"], maxMoves: 12 },
    { size: 4, start: { row: 3, col: 3 }, goal: { row: 0, col: 0 }, blocks: ["1,2", "2,1"], maxMoves: 12 },
    { size: 5, start: { row: 4, col: 0 }, goal: { row: 0, col: 4 }, blocks: ["1,1", "1,3", "2,3", "3,1"], maxMoves: 12 },
    { size: 5, start: { row: 4, col: 2 }, goal: { row: 0, col: 2 }, blocks: ["1,1", "2,1", "2,3", "3,3"], maxMoves: 12 },
    { size: 5, start: { row: 4, col: 4 }, goal: { row: 0, col: 0 }, blocks: ["0,2", "1,2", "3,1", "3,3"], maxMoves: 12 },
    { size: 5, start: { row: 2, col: 0 }, goal: { row: 2, col: 4 }, blocks: ["1,1", "2,2", "3,1", "3,3"], maxMoves: 12 },
    { size: 5, start: { row: 4, col: 1 }, goal: { row: 0, col: 3 }, blocks: ["1,0", "1,1", "2,3", "3,3"], maxMoves: 12 },
    { size: 5, start: { row: 0, col: 0 }, goal: { row: 4, col: 4 }, blocks: ["0,2", "1,2", "2,0", "3,2"], maxMoves: 12 },
    { size: 5, start: { row: 4, col: 0 }, goal: { row: 1, col: 4 }, blocks: ["1,1", "2,1", "2,2", "3,3", "4,3"], maxMoves: 12 }
  ];
}

function renderWaterSolver() {
  const level = waterLevels()[state.waterSolver.level - 1] || waterLevels()[0];
  if (!state.waterSolver.tubes) {
    state.waterSolver.tubes = level.tubes.map((tube) => [...tube]);
    state.waterSolver.selected = null;
    state.waterSolver.moves = 0;
  }
  shell(`Water level ${state.waterSolver.level}: sort each color`, `
    <div class="puzzle-status">
      <span>Level ${state.waterSolver.level} / 12</span>
      <span>${state.waterSolver.moves} pours</span>
    </div>
    <div class="water-board">
      ${state.waterSolver.tubes.map((tube, index) => `
        <button class="water-tube ${state.waterSolver.selected === index ? "is-selected" : ""}" data-tube="${index}" aria-label="Tube ${index + 1}">
          ${Array.from({ length: 4 }, (_, slot) => {
            const color = tube[3 - slot] || "";
            return `<span class="water-slot ${color ? "is-filled" : ""}" style="--water-color:${waterColor(color)}"></span>`;
          }).join("")}
        </button>
      `).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-tube]").forEach((button) => {
    button.addEventListener("click", () => selectWaterTube(Number(button.dataset.tube)));
  });
}

function selectWaterTube(index) {
  if (state.waterSolver.selected === null) {
    if (!state.waterSolver.tubes[index].length) return;
    state.waterSolver.selected = index;
    renderWaterSolver();
    return;
  }
  if (state.waterSolver.selected === index) {
    state.waterSolver.selected = null;
    renderWaterSolver();
    return;
  }
  const from = state.waterSolver.tubes[state.waterSolver.selected];
  const to = state.waterSolver.tubes[index];
  const color = from[from.length - 1];
  const canPour = color && to.length < 4 && (!to.length || to[to.length - 1] === color);
  if (!canPour) {
    markWrong(activity.querySelector(`[data-tube="${index}"]`));
    state.waterSolver.selected = null;
    renderWaterSolver();
    return;
  }
  to.push(from.pop());
  state.waterSolver.moves += 1;
  state.waterSolver.selected = null;
  playTone("D", "toy");
  if (waterSolved(state.waterSolver.tubes)) {
    cheer("Water sorted");
    state.waterSolver.level = state.waterSolver.level === 12 ? 1 : state.waterSolver.level + 1;
    state.waterSolver.tubes = null;
    setTimeout(renderWaterSolver, 850);
  } else {
    renderWaterSolver();
  }
}

function waterSolved(tubes) {
  return tubes.every((tube) => !tube.length || (tube.length === 4 && tube.every((color) => color === tube[0])));
}

function waterColor(color) {
  const colors = {
    red: "#ef6f6c",
    blue: "#3f8cff",
    green: "#2eb872",
    yellow: "#f5c542",
    purple: "#8067dc",
    teal: "#00a6a6"
  };
  return colors[color] || "transparent";
}

function waterLevels() {
  return [
    { tubes: [["red", "red", "red", "blue"], ["blue", "blue", "blue", "red"], []] },
    { tubes: [["green", "green", "yellow", "yellow"], ["yellow", "yellow", "green", "green"], [], []] },
    { tubes: [["red", "blue", "blue", "red"], ["blue", "red", "red", "blue"], [], []] },
    { tubes: [["red", "red", "green", "blue"], ["green", "blue", "blue", "red"], ["blue", "green", "green", "red"], [], []] },
    { tubes: [["yellow", "red", "red", "green"], ["red", "green", "yellow", "green"], ["yellow", "green", "red", "yellow"], [], []] },
    { tubes: [["blue", "purple", "blue", "purple"], ["purple", "blue", "purple", "blue"], [], []] },
    { tubes: [["red", "green", "blue", "yellow"], ["green", "red", "yellow", "blue"], ["yellow", "blue", "green", "red"], ["blue", "yellow", "red", "green"], [], []] },
    { tubes: [["teal", "teal", "red", "blue"], ["red", "blue", "teal", "red"], ["blue", "red", "blue", "teal"], [], []] },
    { tubes: [["purple", "yellow", "green", "purple"], ["green", "purple", "yellow", "green"], ["yellow", "green", "purple", "yellow"], [], []] },
    { tubes: [["red", "blue", "green", "purple"], ["blue", "green", "purple", "red"], ["green", "purple", "red", "blue"], ["purple", "red", "blue", "green"], [], []] },
    { tubes: [["teal", "yellow", "blue", "red"], ["yellow", "blue", "red", "teal"], ["blue", "red", "teal", "yellow"], ["red", "teal", "yellow", "blue"], [], []] },
    { tubes: [["red", "green", "purple", "teal"], ["green", "purple", "teal", "yellow"], ["purple", "teal", "yellow", "blue"], ["teal", "yellow", "blue", "red"], ["yellow", "blue", "red", "green"], ["blue", "red", "green", "purple"], [], []] }
  ];
}

function renderLineSort() {
  const level = lineLevels()[state.lineSort.level - 1] || lineLevels()[0];
  if (!state.lineSort.board) {
    state.lineSort.board = [...level.board];
    state.lineSort.selected = null;
    state.lineSort.moves = 0;
  }
  shell(`Line level ${state.lineSort.level}: make every row match`, `
    <div class="puzzle-status">
      <span>Level ${state.lineSort.level} / 12</span>
      <span>${state.lineSort.moves} swaps</span>
    </div>
    <div class="line-board" style="--line-cols:${level.cols}">
      ${state.lineSort.board.map((item, index) => `
        <button class="line-tile ${state.lineSort.selected === index ? "is-selected" : ""}" data-line-index="${index}" style="--tile-color:${lineColor(item)}">
          <span>${item}</span>
        </button>
      `).join("")}
    </div>
  `);
  activity.querySelectorAll("[data-line-index]").forEach((button) => {
    button.addEventListener("click", () => selectLineTile(Number(button.dataset.lineIndex), level));
  });
}

function selectLineTile(index, level) {
  if (state.lineSort.selected === null) {
    state.lineSort.selected = index;
    renderLineSort();
    return;
  }
  if (state.lineSort.selected === index) {
    state.lineSort.selected = null;
    renderLineSort();
    return;
  }
  const from = state.lineSort.selected;
  [state.lineSort.board[from], state.lineSort.board[index]] = [state.lineSort.board[index], state.lineSort.board[from]];
  state.lineSort.moves += 1;
  state.lineSort.selected = null;
  playTone("E", "toy");
  if (lineSolved(state.lineSort.board, level.cols)) {
    cheer("Lines matched");
    state.lineSort.level = state.lineSort.level === 12 ? 1 : state.lineSort.level + 1;
    state.lineSort.board = null;
    setTimeout(renderLineSort, 850);
  } else {
    renderLineSort();
  }
}

function lineSolved(board, cols) {
  for (let row = 0; row < board.length / cols; row += 1) {
    const start = row * cols;
    const items = board.slice(start, start + cols);
    if (!items.every((item) => item === items[0])) return false;
  }
  return true;
}

function lineColor(item) {
  const colors = {
    car: "#3f8cff",
    ball: "#ef6f6c",
    star: "#f5c542",
    tree: "#2eb872",
    rocket: "#8067dc",
    fish: "#00a6a6"
  };
  return colors[item] || "#eef4fb";
}

function lineLevels() {
  return [
    { cols: 3, board: ["car", "ball", "car", "ball", "car", "ball"] },
    { cols: 3, board: ["star", "tree", "star", "tree", "star", "tree"] },
    { cols: 3, board: ["car", "ball", "star", "ball", "star", "car", "star", "car", "ball"] },
    { cols: 3, board: ["tree", "car", "ball", "ball", "tree", "car", "car", "ball", "tree"] },
    { cols: 4, board: ["car", "ball", "car", "ball", "car", "ball", "car", "ball"] },
    { cols: 4, board: ["star", "tree", "rocket", "star", "tree", "rocket", "star", "tree", "rocket", "rocket", "star", "tree"] },
    { cols: 4, board: ["car", "fish", "ball", "tree", "fish", "ball", "tree", "car", "ball", "tree", "car", "fish", "tree", "car", "fish", "ball"] },
    { cols: 4, board: ["rocket", "star", "car", "fish", "star", "car", "fish", "rocket", "car", "fish", "rocket", "star", "fish", "rocket", "star", "car"] },
    { cols: 4, board: ["tree", "tree", "car", "car", "ball", "ball", "star", "star", "tree", "car", "ball", "star", "tree", "car", "ball", "star"] },
    { cols: 4, board: ["fish", "rocket", "tree", "ball", "rocket", "tree", "ball", "fish", "tree", "ball", "fish", "rocket", "ball", "fish", "rocket", "tree"] },
    { cols: 4, board: ["car", "ball", "star", "tree", "rocket", "fish", "car", "ball", "star", "tree", "rocket", "fish", "car", "ball", "star", "tree", "rocket", "fish", "car", "ball", "star", "tree", "rocket", "fish"] },
    { cols: 4, board: ["rocket", "car", "fish", "star", "tree", "ball", "rocket", "car", "fish", "star", "tree", "ball", "rocket", "car", "fish", "star", "tree", "ball", "rocket", "car", "fish", "star", "tree", "ball"] }
  ];
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
  shell(`Build ${state.word.target}: tap ${nextLetter}`, `
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

function renderJunior2048() {
  if (!state.puzzle2048.board.length) init2048();
  const bestTile = Math.max(...state.puzzle2048.board);
  shell("Merge matching tiles", `
    <div class="game-2048">
      <div class="status-2048">
        <span>Score ${state.puzzle2048.score}</span>
        <span>Best ${bestTile}</span>
      </div>
      <div class="board-2048" aria-label="2048 board">
        ${state.puzzle2048.board.map((value) => `<span class="tile-2048 tile-${value || "empty"}">${value || ""}</span>`).join("")}
      </div>
      <div class="controls-2048" aria-label="Move tiles">
        <button class="tool-button" data-move="up">Up</button>
        <button class="tool-button" data-move="left">Left</button>
        <button class="tool-button" data-move="right">Right</button>
        <button class="tool-button" data-move="down">Down</button>
        <button class="mini-button" id="restart2048">New board</button>
      </div>
    </div>
  `);
  activity.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", () => move2048(button.dataset.move));
  });
  activity.querySelector("#restart2048").addEventListener("click", () => {
    init2048();
    renderJunior2048();
  });
}

function init2048() {
  state.puzzle2048.board = Array(16).fill(0);
  state.puzzle2048.score = 0;
  add2048Tile();
  add2048Tile();
}

function add2048Tile() {
  const empty = state.puzzle2048.board
    .map((value, index) => value ? null : index)
    .filter((index) => index !== null);
  if (!empty.length) return;
  const index = pick(empty);
  state.puzzle2048.board[index] = Math.random() < 0.9 ? 2 : 4;
}

function move2048(direction) {
  const before = state.puzzle2048.board.join(",");
  let gained = 0;
  const nextBoard = Array(16).fill(0);
  for (let i = 0; i < 4; i += 1) {
    const indexes = lineIndexes(direction, i);
    const values = indexes.map((index) => state.puzzle2048.board[index]);
    const merged = merge2048Line(values);
    gained += merged.score;
    indexes.forEach((index, itemIndex) => {
      nextBoard[index] = merged.values[itemIndex];
    });
  }
  state.puzzle2048.board = nextBoard;
  if (state.puzzle2048.board.join(",") === before) return;
  state.puzzle2048.score += gained;
  add2048Tile();
  if (gained > 0) cheer(`Merged ${gained}`);
  renderJunior2048();
}

function lineIndexes(direction, line) {
  if (direction === "left") return [0, 1, 2, 3].map((col) => line * 4 + col);
  if (direction === "right") return [3, 2, 1, 0].map((col) => line * 4 + col);
  if (direction === "up") return [0, 1, 2, 3].map((row) => row * 4 + line);
  return [3, 2, 1, 0].map((row) => row * 4 + line);
}

function merge2048Line(values) {
  const compact = values.filter(Boolean);
  const merged = [];
  let score = 0;
  for (let index = 0; index < compact.length; index += 1) {
    if (compact[index] === compact[index + 1]) {
      const value = compact[index] * 2;
      merged.push(value);
      score += value;
      index += 1;
    } else {
      merged.push(compact[index]);
    }
  }
  while (merged.length < 4) merged.push(0);
  return { values: merged, score };
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
  const oldPopup = document.querySelector(".kid-success");
  if (oldPopup) oldPopup.remove();
  const popup = document.createElement("div");
  popup.className = "kid-success";
  popup.setAttribute("role", "status");
  popup.innerHTML = `
    ${successMascot()}
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
    ${tryAgainMascot()}
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

function successMascot() {
  return `
    <div class="success-mascot" aria-hidden="true">
      <span class="mascot-eye left-eye"></span>
      <span class="mascot-eye right-eye"></span>
      <span class="mascot-mouth"></span>
      <span class="mascot-arm left-arm"></span>
      <span class="mascot-arm right-arm"></span>
      <span class="mascot-spark s1"></span>
      <span class="mascot-spark s2"></span>
      <span class="mascot-spark s3"></span>
    </div>
  `;
}

function tryAgainMascot() {
  return `
    <div class="retry-mascot" aria-hidden="true">
      <span class="mascot-eye left-eye"></span>
      <span class="mascot-eye right-eye"></span>
      <span class="mascot-mouth"></span>
      <span class="retry-tear"></span>
      <span class="mascot-arm left-arm"></span>
      <span class="mascot-arm right-arm"></span>
    </div>
  `;
}

function runnerMascot() {
  return `
    <div class="runner-mascot" aria-hidden="true">
      <span class="runner-head"></span>
      <span class="runner-body"></span>
      <span class="runner-arm left-arm"></span>
      <span class="runner-arm right-arm"></span>
      <span class="runner-leg left-leg"></span>
      <span class="runner-leg right-leg"></span>
    </div>
  `;
}

function shauryaSmiley(mood) {
  const happy = mood === "happy";
  return `
    <div class="shaurya-smiley ${happy ? "is-happy" : "is-sad"}" aria-hidden="true">
      <span class="kid-hair h1"></span>
      <span class="kid-hair h2"></span>
      <span class="kid-hair h3"></span>
      <span class="kid-hair h4"></span>
      <span class="kid-hair h5"></span>
      <span class="face-base">
        <span class="ear left-ear"></span>
        <span class="ear right-ear"></span>
        <span class="cheek left-cheek"></span>
        <span class="cheek right-cheek"></span>
        <span class="eye left-eye"></span>
        <span class="eye right-eye"></span>
        <span class="blink blink-left"></span>
        <span class="blink blink-right"></span>
        <span class="nose"></span>
        <span class="expression-mouth"></span>
      </span>
      <span class="tiny-hand left-hand"></span>
      <span class="tiny-hand right-hand"></span>
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
