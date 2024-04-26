const inputT = document.getElementById("input");

// itemlarni caqirib oldim.func ocaman

const btnP = document.getElementById("buttonP");
const btnM = document.getElementById("buttonM");
const btnK = document.getElementById("multiplication");
const btnD = document.getElementById("division");

// call a number from css
const first = document.getElementById("one");
const second = document.getElementById("two");
const third = document.getElementById("three");
const fourth = document.getElementById("four");
const fifth = document.getElementById("five");
const sixN = document.getElementById("six");
const sevenT = document.getElementById("seven");
const eightT = document.getElementById("eight");
const nineT = document.getElementById("nine");
const zeroO = document.getElementById("zero");
const equalT = document.getElementById("equal");

function pressElement(input) {
  inputT.value += input;
}

first.addEventListener("click", function () {
  pressElement("1");
});
second.addEventListener("click", function () {
  pressElement("2");
});
third.addEventListener("click", function () {
  pressElement("3");
});
fourth.addEventListener("click", function () {
  pressElement("4");
});
fifth.addEventListener("click", function () {
  pressElement("5");
});
sixN.addEventListener("click", function () {
  pressElement("6");
});
sevenT.addEventListener("click", function () {
  pressElement("7");
});
eightT.addEventListener("click", function () {
  pressElement("8");
});
nineT.addEventListener("click", function () {
  pressElement("9");
});
zeroO.addEventListener("click", function () {
  pressElement("0");
});
equalT.addEventListener("click", function () {
  pressElement("=");
});
buttonM.addEventListener("click", function () {
  pressElement("-");
});
buttonP.addEventListener("click", function () {
  pressElement("+");
});
multiplication.addEventListener("click", function () {
  pressElement("*");
});
division.addEventListener("click", function () {
  pressElement("/");
});

function calc() {
  inputT.value = eval(inputT.value);
}
