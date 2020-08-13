const buttons = document.querySelectorAll(".btn");
const selectionDiv = document.getElementById("selection");
const displayImage = document.getElementById("center");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const winner = document.getElementById("winner");

let heads = 1;
let tails = 0;

let userScore = 0,
  computerScore = 0;

function displaySelection(user, computer) {
  const spin = document.querySelector(".center");
  spin.classList.add("animate");

  selectionDiv.innerHTML = `<h2>Player Selected: <span class="selects">${user}</span></h2>  <h2>Computer Selected <span class="selects">${computer}</span></h2>`;
}

function displayRandom(random) {
  const displayResult = document.querySelector("#image");
  console.log(random);

  if (random === 1) {
    displayImage.style.backgroundImage = "url('./heads.png')";
  } else {
    displayImage.style.backgroundImage = "url('./tails.png')";
  }
}

function checkScore(random, userPick, computerPick) {
  //   console.log(random, "user:", user, "computer: ", computer);

  if (userPick === random) {
    userScore++;
  }
  if (computerPick === random) {
    computerScore++;
  }
  console.log(userScore, computerScore);
  player.innerHTML = `Player: ${userScore}`;
  computer.innerHTML = `Computer: ${computerScore}`;

  if (userScore === 5 && computerScore === 5) {
    winner.innerHTML = `<h1>It's a Tie</h1>`;
  } else if (userScore === 5) {
    winner.innerHTML = `<h1>You Win!!!</h1>`;
  } else if (computerScore === 5) {
    winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
  }
}

buttons.forEach((buttons) => {
  buttons.addEventListener("click", function (e) {
    let userPick;
    console.log(e.target.id);
    const userSelection = e.target.id;

    if (userSelection === "head") {
      userPick = 1;
    } else if (userSelection === "tail") {
      userPick = 0;
    }

    const random = Math.floor(Math.random() * 2);
    console.log(random);

    let computerSelection, computerPick;

    computerPick = Math.floor(Math.random() * 2);

    if (computerPick === 1) {
      computerSelection = "heads";
    } else computerSelection = "tails";
    // console.log("Computer Select", computerSelection);

    displaySelection(userSelection, computerSelection);
    displayRandom(random);

    setTimeout(function () {
      checkScore(random, userPick, computerPick);
    }, 2000);
  });
});
