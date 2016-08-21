// Set core variables
var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
// Set ball locations
    x = canvas.width/2,
    y = canvas.height-30,
// Define ball movement
    dx = 2,
    dy = -2;
// Define ball drawing function
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
// Define draw parameters
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
// Set repaint interval
setInterval(draw, 10);
