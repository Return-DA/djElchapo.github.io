// Note: querySelectorAll return a list of all same items

// Audios
var audios = [];

// Number of buttons
var btnNbr = document.querySelectorAll(".drum").length;

// Main Program
for (var i = 0; i < btnNbr; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makesound(this.textContent);
    animation(this.textContent);
  });
}

document.addEventListener("keydown", function (event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  switch (key) {
    case "a":
      var s1 = new Audio("sounds/crash.mp3");
      s1.play();
      break;
    case "s":
      var s2 = new Audio("sounds/kick-bass.mp3");
      s2.play();
      break;
    case "d":
      var s3 = new Audio("sounds/snare.mp3");
      s3.play();
      break;
    case "f":
      var s4 = new Audio("sounds/tom-1.mp3");
      s4.play();
      break;
    case "j":
      var s5 = new Audio("sounds/tom-2.mp3");
      s5.play();
      break;
    case "k":
      var s6 = new Audio("sounds/tom-3.mp3");
      s6.play();
      break;
    case "l":
      var s7 = new Audio("sounds/tom-4.mp3");
      s7.play();
      break;
    default:
      console.log(key);
  }
}

function animation(key) {
  var btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 100);
}
