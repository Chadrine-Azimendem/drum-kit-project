const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const boomKey = document.getElementById("boomKey");
const clapKey = document.getElementById("clapKey");
const hihatKey = document.getElementById("hihatKey");
const kickKey = document.getElementById("kickKey");
const openhatKey = document.getElementById("openhatKey");
const rideKey = document.getElementById("rideKey");
const snareKey = document.getElementById("snareKey");
const tinKey = document.getElementById("tinKey");
const tomKey = document.getElementById("tomKey");

boomKey.addEventListener("click", () => {
  boom.play();
});
clapKey.addEventListener("click", () => {
  clap.play();
});
hihatKey.addEventListener("click", () => {
  hihat.play();
});
kickKey.addEventListener("click", () => {
  kick.play();
});
openhatKey.addEventListener("click", () => {
  openhat.play();
});
rideKey.addEventListener("click", () => {
  ride.play();
});
snareKey.addEventListener("click", () => {
  snare.play();
});
tinKey.addEventListener("click", () => {
  tink.play();
});
tomKey.addEventListener("click", () => {
  tom.play();
});

document.addEventListener("keydown", (e) => {
  let eKey = e.key;
  switch (eKey) {
    case "a":
    case "A":
      boom.play();
      break;
    case "s":
    case "S":
      clap.play();
      break;
    case "d":
    case "D":
      hihat.play();
      break;
    case "f":
    case "F":
      kick.play();
      break;
    case "g":
    case "G":
      openhat.play();
      break;
    case "h":
    case "H":
      ride.play();
      break;
    case "j":
    case "J":
      snare.play();
      break;
    case "k":
    case "K":
      tink.play();
      break;
    case "l":
    case "L":
      tom.play();
      break;
  }
});
