const text = document.getElementById("text");
const button = document.getElementById("btn");
const square = document.getElementById("square");
const circleBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const span = document.getElementById("range-span");
const circle = document.getElementById("circle");

const getSquareColor = function () {
  square.style.backgroundColor = text.value;
};
button.addEventListener("click", getSquareColor);

const logger = function (event) {
  span.textContent = event.target.value;
};

range.addEventListener("click", logger);

circleBtn.style.display = "none";

function resizeCircle(event) {
  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
}

range.addEventListener("input", resizeCircle);
