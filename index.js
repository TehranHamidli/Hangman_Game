var words = [
  "salam",
  "sagol",
  "code",
  "programming",
  "market",
  "musiqi",
  "dunya",
];

let currentWord = "";
let chances = 9;
let chosenletters = [];
let wins = 0;
let losses = 0;
let hiddenword = [];
let allowedLetters = "qwertyuiopasdfghjklzxcvbnmöğıəçş";

function randomWord() {
  const texminisoz = words[Math.floor(Math.random() * words.length)];
  return texminisoz;
}
randomWord();

function start() {
  currentWord = randomWord();
  hiddenword = Array.from("-".repeat(currentWord.length));

  // hiddenword.innerHTML;
  return;
}

start();

function updateHiddenWord() {
  hiddenword.splice(0);
  for (let letter of currentWord) {
    if (chosenletters.includes(letter)) {
      hiddenword.push(letter);
    } else {
      hiddenword.push("-");
    }
  }
}
updateHiddenWord();

function setLetter(letter) {
  if (!allowedLetters.toLowerCase().includes(letter)) {
    alert("Düzgün Hərflərdən İstifadə edin!");
  } else if (!chosenletters.includes(letter)) {
    chosenletters.push(letter);
    if (!currentWord.includes(letter)) {
      chances--;
    }
  }
  updateHiddenWord();
}
// setLetter();

function showState() {
  document.querySelector(".hidden-word").innerHTML = hiddenword;

  document.querySelector("#chances-left").innerHTML = chances;

  document.querySelector("#chosen-letters").innerHTML = chosenletters;

  document.querySelector("#wins").innerHTML = wins;

  document.querySelector("#losses").innerHTML = losses;
}
showState();

function isGameEnded() {
  const netice = !chances || !hiddenword.includes("-");

  if (!chances) {
    losses++;
  } else if (!hiddenword.includes("-")) {
    wins++;
  }

  return netice;
}
isGameEnded();

window.addEventListener("keyup", function (e) {
  if (isGameEnded()) {
    this.alert("Oyun Bitib!!");
    showState();
    return;
  }

  setLetter(e.key.toLowerCase());
  showState();
  if (isGameEnded()) {
    this.alert("Oyun Bitib!!");
    showState();
    return;
  }
});
