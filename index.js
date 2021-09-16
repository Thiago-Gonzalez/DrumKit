//Gets each sound
var crashSound = new Audio('sounds/crash.mp3');
var kickSound = new Audio('sounds/kick-bass.mp3');
var snareSound = new Audio('sounds/snare.mp3');
var tom1Sound = new Audio('sounds/tom-1.mp3');
var tom2Sound = new Audio('sounds/tom-2.mp3');
var tom3Sound = new Audio('sounds/tom-3.mp3');
var tom4Sound = new Audio('sounds/tom-4.mp3');

//Gets the number of buttons that has drum class
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop: to add event listener for each button that has drum class
for (var i = 0; i < numberOfDrumButtons; i++) {

  //Event Listener that adds functionality when the buttons that has drum class are clicked
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

//Event Listener that adds functionality when a key is pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Function that identifies the key pressed or the button clicked and adds their respective sound
function makeSound(key) {
  switch (key) {
    case "w":
      tom1Sound.play();
    break;

    case "a":
      tom2Sound.play();
    break;

    case "s":
      tom3Sound.play();
    break;

    case "d":
      tom4Sound.play();
    break;

    case "j":
      snareSound.play();
    break;

    case "k":
      crashSound.play();
    break;

    case "l":
      kickSound.play();
    break;


    default:
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout (function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
