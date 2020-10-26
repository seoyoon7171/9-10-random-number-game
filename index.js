const range = document.getElementById("jsRange");
const showSize = document.querySelector("h2");

const guessClass = document.querySelector("form");
const submitNum = guessClass.querySelector("num");
const showNum = document.querySelector(".show_num");
const winLose = document.querySelector("h3");
const button = document.querySelector("button");

let size = 10;
let MACHINE = Math.floor(Math.random() * size);
let num = 10;

function handleRangeChange(event) {
  size = event.target.value;
  showSize.innerHTML = `Generate a number between 0 and ${size}`;
  return size;
}

function showResult(a, b) {
  console.log(Number(a), Number(b));
  if (Number(a) !== Number(b)) {
    winLose.innerText = "You lose!";
  } else {
    winLose.innerText = "You won!";
  }
}

function changeRandom() {
  MACHINE = Math.floor(Math.random() * size);
  showNum.innerText = `You choose: ${num}, the machine choose: ${MACHINE}.`;
  showResult(num, MACHINE);
  return MACHINE;
}

function handleSubmit(event) {
  num = event.target.value;
  return num;
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (guessClass) {
  guessClass.addEventListener("input", handleSubmit);
}

if (button) {
  button.addEventListener("click", changeRandom);
}
