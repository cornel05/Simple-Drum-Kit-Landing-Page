function playSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
  }
  audio.play();
  animateButton(key);
}

function animateButton(key) {
  var button = document.querySelector("." + key);
  if (button) {
    button.classList.add("animated");
    setTimeout(function () {
      button.classList.remove("animated");
    }, 100);
  }
}

window.addEventListener("keydown", function (event) {
    console.log(event);
  playSound(event.key);
});

var buttons = document.querySelectorAll("button");
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    playSound(this.innerHTML);
  });
});

window.addEventListener("beforeunload", function (event) {
    console.log(event);
  event.preventDefault();
});
