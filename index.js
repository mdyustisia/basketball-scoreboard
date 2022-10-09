let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");
let highlightLeaderEl = document.getElementById("highlight-leader");

let homePoint = 0;
let awayPoint = 0;

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

// Away Point Button

function add1Away() {
  awayPoint += 1;
  awayScore.textContent = awayPoint;
}

function add2Away() {
  awayPoint += 2;
  awayScore.textContent = awayPoint;
}

function add3Away() {
  awayPoint += 3;
  awayScore.textContent = awayPoint;
}

// Hightlight Leader

function highlight() {
  if (homePoint > awayPoint) {
    highlightLeaderEl.textContent = "Home Lead";
  } else if (homePoint < awayPoint) {
    highlightLeaderEl.textContent = "Away Lead";
  } else if (homePoint === awayPoint) {
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
  awayPoint = 0;
  homeScore.textContent = homePoint;
  awayScore.textContent = awayPoint;
  time = 600;
  highlightLeaderEl.textContent = "Game Started";
}
