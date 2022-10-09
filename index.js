let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let highlightLeaderEl = document.getElementById("highlight-leader");

let homePoint = 0;
let guestPoint = 0;

// Home Point Button

function add1Home() {
  homePoint += 1;
  homeScore.textContent = homePoint;
}

function add2Home() {
  homePoint += 2;
  homeScore.textContent = homePoint;
}

function add3Home() {
  homePoint += 3;
  homeScore.textContent = homePoint;
}

// Guest Point Button

function add1Guest() {
  guestPoint += 1;
  guestScore.textContent = guestPoint;
}

function add2Guest() {
  guestPoint += 2;
  guestScore.textContent = guestPoint;
}

function add3Guest() {
  guestPoint += 3;
  guestScore.textContent = guestPoint;
}

// Hightlight Leader

function highlight() {
  if (homePoint > guestPoint) {
    highlightLeaderEl.textContent = "Home Lead";
  } else if (homePoint < guestPoint) {
    highlightLeaderEl.textContent = "Guest Lead";
  } else if (homePoint === guestPoint) {
    highlightLeaderEl.textContent = "It's Tie";
  }
}

// Timer
const startingMinutes = 10;
let time = startingMinutes * 60;

const timerEl = document.getElementById("timer");

setInterval(updateTimer, 1000);

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerEl.textContent = `${minutes}:${seconds}`;
  time--;
}

// New Game

function newGame() {
  homePoint = 0;
  guestPoint = 0;
  homeScore.textContent = homePoint;
  guestScore.textContent = guestPoint;
  time = 600;
  highlightLeaderEl.textContent = "Game Started";
}
