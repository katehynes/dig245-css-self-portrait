/* Total elements are logged in the console, but you
have to scroll all the way up to see it */

const elements = document.querySelectorAll("div");
console.log("Total HTML elements used in portrait: " + elements.length);

document.addEventListener('mousemove', getPos);

function getPos() {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X: " + x + ", Y: " + y;
  console.log("MOUSE: " + coor);
}
