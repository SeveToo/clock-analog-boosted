const cyfrowy = document.querySelector("p");
const hourPointer = document.querySelector(".hourPointer");
const minutePointer = document.querySelector(".minutePointer");
const secondPointer = document.querySelector(".secondPointer");

onload = () => {
  background();
  change();
};

let colorGlobal;
function background() {
  let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) color += tab[Math.round(Math.random() * 15)];
  colorGlobal = color;
  document.documentElement.style.setProperty("--main-color", colorGlobal);
  let data = new Date(),
    godz = plusZero(data.getHours()),
    min = plusZero(data.getMinutes()),
    sec = plusZero(data.getSeconds());
  cyfrowy.innerHTML =
    godz +
    ":" +
    min +
    ':<span style =  "color:' +
    colorGlobal +
    '">' +
    sec +
    "</span>";
}

var a;

function change() {
  a = setInterval(background, 1000);
}

function plusZero(x) {
  if (x < 10) x = "0" + x;
  return x;
}

function hour(godz) {
  if (godz > 12) godz -= 12;
  godz *= 30;
  hourPointer.style.transform = `translate(-50%,-50%) rotate(${godz}deg)`;
}

function minute(min) {
  min *= 6;
  minutePointer.style.transform = `translate(-50%,-50%) rotate(${min}deg)`;
}

function second(sec) {
  sec *= 6;
  secondPointer.style.transform = `translate(-50%,-50%) rotate(${sec}deg)`;
}

setInterval(function () {
  let data = new Date(),
    godz = data.getHours(),
    min = data.getMinutes(),
    sec = data.getSeconds();
  hour(godz);
  minute(min);
  second(sec);
}, 1000);
