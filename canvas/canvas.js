console.log("Hello canvas!");

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// c.fillStyle= 'rgba(255,120,0,0.5)';
// c.fillRect(100,300,200,300);

// c.fillStyle = 'rgba(0,20,199,.7)';
// c.fillRect(300,300,200,300);

// c.fillStyle = 'rgba(0,200,99,.9)';
// c.fillRect(500,300,200,300);



// console.log(canvas);


// c.beginPath();
// c.moveTo(300,400);
// c.lineTo(450, 500);
// c.lineTo(600,670);
// c.strokeStyle = "red";
// c.stroke();


// for(var i = 0; i < 35; i++){
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x,y,40,0,Math.PI*2,false);
// 	c.strokeStyle = getRandomColor();
// 	c.stroke();
// }


// function getRandomColor(){
// 	var x = Math.random() * 256;
// 	var y = Math.random() * 256;
// 	var z  = Math.random() * 256; 

// 	var color = 'rgb(x,y,z)';
// 	return color;
// 	console.log(color);
// }



// function Circle(x,y,radius,dx,dy){
// 	this.x = x;
// 	this.y = y;
// 	this.radius = radius;
// 	this.dx = dx;
// 	this.dy = dy;

// 	this.draw = function(){
// 		c.beginPath();
// 		c.arc(this.x, this.y, this.radius,0,Math.PI*2, false);
// 		c.strokeStyle = "blue";
// 		c.stroke();
// 		c.fill();
// 	}

// 	this.update = function(){
// 		this.draw();
// 		if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
// 		this.dx = - this.dx;
// 	}
// 		if(this.y + this.radius > innerHeight || this.y - this.radius <0){
// 		this.dy = -this.dy;
// 	}
	
// 		this.x+=this.dx;
// 		this.y+=this.dy;

// 	}
// }



// var circleArray = [];
// for(var i = 0; i <101; i++){
// 	var x = Math.random()*innerWidth;
// 	var y = Math.random()*innerHeight;
// 	var dx = (Math.random()-0.5);
// 	var dy = (Math.random()-0.5);
// 	var radius = 40;
	
// 	circleArray.push(new Circle(x, y, radius,dx,dy));
// }




// function animate(){
// 	requestAnimationFrame(animate);

//  	c.clearRect(0,0,innerWidth,innerHeight);

//  	for(var i = 0; i <101; i++){
//  	circleArray[i].update();
//  }
//  	 }
//  animate();


var txts = [];
txts.push("HardWorking");
txts.push("Friendly");


var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 100, dashOffset = dashLen, speed = 5,
    txt = txts[0], x = 30, i = 0;

ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#1f2f90";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);   
  




                          // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
  
})();
