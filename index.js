const xClass = "x";
const circleClass = "circle";
const divElements = document.querySelectorAll("[data-cell]");
const container = document.getElementById("container");
let circleTurn;

divElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circleClass : xClass;
  //placemark
  placeXorCircle(cell, currentClass);
  //check whos turn
  //check for win
  //check for draw
  //swap
  swapTurn();
  setContainerHoverState();
}
function placeXorCircle(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurn() {
  circleTurn = !circleTurn;
}
function setContainerHoverState() {
  container.classList.remove(xClass);
  container.classList.remove(circleClass);
  if (circleTurn) {
    container.classList.add(circleClass);
  } else {
    container.classList.add(xClass);
  }
}
