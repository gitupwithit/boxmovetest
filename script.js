const box = document.getElementById("box");
const num = document.getElementById("num");

box.addEventListener("touchdown", handleTouch);

function handleTouch(ev) {
  console.log(ev);
  num.innerHTML = ev
}