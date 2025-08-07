const colors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 0;
let started = false;

const startButton = document.getElementById("start");
const levelText = document.getElementById("level");

startButton.addEventListener("click", startGame);

function startGame() {
  gamePattern = [];
  userPattern = [];
  level = 0;
  started = true;
  levelText.textContent = "Level: 0";
  nextSequence();
}

function nextSequence() {
  userPattern = [];
  level++;
  levelText.textContent = `Level: ${level}`;

  const randomColor = colors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);
  
  flashButton(randomColor);
}

function flashButton(color) {
  const button = document.getElementById(color);
  button.classList.add("active");
  setTimeout(() => button.classList.remove("active"), 300);
  // Optional: Play sound here
}

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const clickedColor = e.target.id;
    userPattern.push(clickedColor);
    flashButton(clickedColor);
    checkAnswer(userPattern.length - 1);
  });
});

function checkAnswer(currentIndex) {
  if (gamePattern[currentIndex] === userPattern[currentIndex]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    levelText.textContent = `Game Over! Reached Level ${level}`;
    started = false;
  }
}
