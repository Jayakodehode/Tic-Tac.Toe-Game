const xClass = "x";
const circleClass = "circle";
const winning_Combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const divElements = document.querySelectorAll("[data-cell]");
const boardContainer = document.getElementById("board-container");
const winMessage = document.getElementById("winmessage");
const dataWinningMessage = document.getElementById("data-winning-message");
const restartbtn = document.getElementById("restartbtn");
const turn = document.getElementById("turn");

let circleTurn;
startGame();
restartbtn.addEventListener("click", startGame);
function startGame() {
  divElements.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    cell.addEventListener("click", handleClick, { once: true });
  });

  setContainerHoverState();
  winMessage.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  turn.textContent = `Current turn : Player ${currentClass}`;
  //placemark
  placeXorCircle(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
    console.log("winner");
  } else if (draw()) {
    endGame(true);
  } else {
    swapTurn();
    setContainerHoverState();
  }

  //check whos turn
  //check for win
  //check for draw
  //swap
}
function placeXorCircle(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurn() {
  circleTurn = !circleTurn;
}
function setContainerHoverState() {
  boardContainer.classList.remove(xClass);
  boardContainer.classList.remove(circleClass);
  if (circleTurn) {
    boardContainer.classList.add(circleClass);
  } else {
    boardContainer.classList.add(xClass);
  }
}
function checkWin(currentClass) {
  console.log(currentClass);
  return winning_Combinations.some((combination) => {
    return combination.every((index) => {
      return divElements[index].classList.contains(currentClass);
    });
  });
}
function endGame(draw) {
  if (draw) {
    dataWinningMessage.innerText = "Draw";
  } else {
    dataWinningMessage.innerText = `${circleTurn ? "O's" : "X's"}Wins`;
  }
  winMessage.classList.add("show");
}
function draw() {
  return [...divElements].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
}
