var burgerMenu = document.getElementById('burgerIcon');

var overlay = document.getElementById('burgerMenu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});