// We find the burger element to add an event to it
var burgerMenu = document.getElementById('burgerIcon');

//We find the element that we want to trigger with the burger element
var overlay = document.getElementById('burgerMenu');

// Listener event type onClick, to toggle the visibility of the element overlay
burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});