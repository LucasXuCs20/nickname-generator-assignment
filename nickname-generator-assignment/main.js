const arrayNames = [
  "Crusher",
  "The Rock",
  "Money",
  "The Wall",
  "Captain",
  "Hotshot",
  "The Eagle",
];
let n = arrayNames.length;
const outputEl = document.getElementById("output");

function allNames() {
  let first = document.getElementById("firstname").value.trim();
  let last = document.getElementById("lastname").value.trim();
  outputEl.innerHTML = "";
  for (let i = 0; i < n; i++) {
    outputEl.innerHTML += `${i + 1}: ${first} "${arrayNames[i]}" ${last}`;
    outputEl.innerHTML += "<br>";
  }
}

function randomName() {
  let first = document.getElementById("firstname").value.trim();
  let last = document.getElementById("lastname").value.trim();
  let random = Math.floor(Math.random() * 7);
  outputEl.innerHTML = `1: ${first} "${arrayNames[random]}" ${last}`;
}
