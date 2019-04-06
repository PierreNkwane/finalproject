// Prend l'id du svg
var path = document.querySelector('#fresque-path');

// Prend la longueur total du svg
var pathLength = path.getTotalLength();

// Fait de long traits
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Fait apparaitre les traits entièrement
path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

// Lorsqu'on scroll
window.addEventListener("scroll", function(e) {

  // Récupération du pourcentage du scroll
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // réglage d'apparition
  if (scrollPercentage > 0.08) {
  var drawLength = pathLength * (scrollPercentage - 0.08);
}
  if (scrollPercentage > 0.405) {
  var drawLength = pathLength * (1.14*scrollPercentage - 0.09999999);
}
if (scrollPercentage > 0.570) {
var drawLength = pathLength * (1.14*scrollPercentage - 0.08);
}
  // Effacement du trait
  path.style.strokeDashoffset = pathLength - drawLength;

  // Garde la frome net
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";

  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

});
