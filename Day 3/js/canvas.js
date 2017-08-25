//Get canvas
var canvas = document.getElementById('canvas');
var canvas1 =document.getElementById('square');

canvas1.height = 700;
canvas1.width = 1000;
canvas.width = 1000;
canvas.height = 700;
(canvas) && console.log('1');

//Get context of canvas
var context = canvas.getContext('2d');
var context2 = canvas1.getContext('2d');

context.strokeStyle = 'red';
context.lineWidth = '5px';

//Start from (200,200);
context.beginPath();
context.moveTo(200,200);
context.lineTo(500,200);
context.closePath();
//draw
context.stroke();

context.strokeStyle = 'blue';
context.beginPath();
context.moveTo(350,100);
context.lineTo(350,400);
context.closePath();
context.stroke();

context2.strokeStyle = 'green';
context2.fillStyle = 'red';
context2.beginPath();
context2.moveTo(100,100);
context2.lineTo(200,500);
context2.lineTo(300,400);
context2.lineTo(100,100);
context2.fill();
context2.stroke();