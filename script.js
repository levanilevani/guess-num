const message = document.querySelector(".message");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    message.textContent = " You Should Type Any Number🙌 ";
  } else if (guess === secretNumber) {
    message.textContent = " congarts! correct Number 😉 ";
    document.querySelector("body").style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textcontent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "  Too High 🤦‍♂️";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "orange";
    } else {
      message.textContent = " You Lost game! 😢";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "  Too low 👀";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "blue";
    } else {
      message.textContent = " You Lost game! 😢";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "gray";
});
