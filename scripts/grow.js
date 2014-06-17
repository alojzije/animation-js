var deg_to_rad = Math.PI / 180.0;
var depth = 9;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle   = '#000';
context.lineWidth   = 1.5;
var xStart = context.canvas.clientWidth *0.5;
var yStart = context.canvas.clientHeight;


function drawTree(x1, y1, angle, offset, depth){
  if (depth == 9){
    var x2 = x1 + (Math.cos(-90 * deg_to_rad) * depth * 8.0);
    var y2 = y1 + (Math.sin(-90 * deg_to_rad) * depth * 8.0);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, -90 - offset, offset,  depth - 1);
    drawTree(x2, y2, -90 + offset, offset, depth - 1);

  } else if (depth != 0){
    var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 8.0);
    var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 8.0);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, angle - offset, offset, depth - 1);
    drawTree(x2, y2, angle + offset, offset, depth - 1);
  }
}

function drawLine(x1, y1, x2, y2){
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
}

function canvasDraw(angleOffset){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(xStart, yStart-2, 4, 0, 2 * Math.PI, false);
  context.closePath();
  context.fill();
  hideMover(movers[0]);
  context.beginPath();
  drawTree(xStart, yStart, -90, angleOffset, depth);
  context.closePath();
  context.stroke();
}

var k = 0.001; 
function branch_out(){
  k +=0.1*Math.min(k, 3);
  canvasDraw(k);
  if (k <=30)    requestAnimationFrame(branch_out);
  else
    bounce_back1();
}

function bounce_back1(){
  k -=0.1;
  canvasDraw(k);
  if (k >=20)    requestAnimationFrame(bounce_back1);
  else
    bounce_back2();
}

function bounce_back2(){
  k +=0.1;
  canvasDraw(k);
  if (k <=25)    requestAnimationFrame(bounce_back2);
  else sketch($("#canvas_holder").offset().left, xStart*2, yStart+2);

}
function reposition_canvas(x, y){
  $("#canvas_holder").css({'top':  (y -$("#canvas_holder").innerHeight())+'px'});

  $("#canvas_holder").css({'left': (x-$("#canvas_holder").innerWidth()*0.5) +'px' });
}

function growFractal(){
    var i = 0
  var intervalId = setInterval(function(){
      drawLine(xStart, yStart, xStart, yStart-i);
      context.stroke();
      if (i++ >= yStart-40) {
        clearInterval(intervalId);
          branch_out();
  }
  },10);

}