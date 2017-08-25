document.write('hello world');
//document.write('<img src="../Image/wp_4.jpg">');

var div1 = document.getElementById('icon');
div1.src = '../Image/wp_4.jpg';

//Add Element by using js
var div = document.createElement('div');
div.style.background = 'red';
div.style.height = '500px';
div.style.width = '400px';
//add it to body
document.body.appendChild(div);

//add a pic into div
var img = document.createElement('img');
img.src ='../Image/wp_6.jpg';
img.style.height = '100px';
img.style.widht = '100px';
div.appendChild(img);
//remove div
div.remove();