const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'green';
// fillRect function arguments: x-coordinate, y-coordinate, height, width
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
ctx.fillStyle = 'red';
// arc function arguments - x-coordinate, y-coordinate, radius, startAngle, endAngle
// Math.PI is a radian style equal to 180 degree.
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw Lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
// moveTo specifies the starting point of the line
ctx.moveTo(10, 10);
// lineTo specifies the ending point of the line.
ctx.lineTo(300, 300);
ctx.stroke();

// Draw Text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);

// Draw Image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100));
