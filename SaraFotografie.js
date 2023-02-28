/* to show the first piture of the main page*/
var saraPicture = document.getElementById("sara-picture");
var lastScrollTop = 0;

window.onscroll = function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    saraPicture.classList.add("hidden");
  } else {
    saraPicture.classList.remove("hidden");
  }
  lastScrollTop = st;
};