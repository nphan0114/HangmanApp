// canvas drawing; clears canvas then redraw just the hanger
function drawHanger(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("hanger");
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
}

function drawArms(x){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(255, 185);
  ctx.lineTo(x, 330);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x,330,6,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
}

// right arm
function drawRightArm(){
  drawArms(315);
}
// left arm
function drawLeftArm(){
  drawArms(215);
}

// right leg
function drawRightLeg(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(270, 475);
  ctx.lineTo(275, 490);
  ctx.lineWidth = 13;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(270, 410);
  ctx.lineTo(270, 480);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(255, 305);
  ctx.lineTo(270, 410);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();
}

// left leg
function drawLeftLeg(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(240, 475);
  ctx.lineTo(235, 490);
  ctx.lineWidth = 13;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(240, 410);
  ctx.lineTo(240, 480);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(255, 300);
  ctx.lineTo(240, 410);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();
}
// torso
function drawBody(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(255, 175);
  ctx.lineTo(255, 305);
  ctx.lineWidth = 15;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();
}
//head
function drawHead(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(255,125,50,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  // ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();

  // left eyebrows
  ctx.beginPath();
  ctx.moveTo(245, 100);
  ctx.lineTo(230, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  // right eyebrows
  ctx.beginPath();
  ctx.moveTo(265, 100);
  ctx.lineTo(280, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // eyes
  ctx.beginPath();
  ctx.arc(240,120,3,0,2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(270,120,3,0,2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  //mouth
  ctx.beginPath();
  ctx.arc(255,140,20,0,1*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
}

function drawHead2(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(255,125,50,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  // left eyebrows
  ctx.beginPath();
  ctx.moveTo(245, 105);
  ctx.lineTo(230, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  // right eyebrows
  ctx.beginPath();
  ctx.moveTo(265, 105);
  ctx.lineTo(280, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // eyes
  ctx.beginPath();
  ctx.arc(240,120,3,0,2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(270,120,3,0,2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  //mouth
  ctx.beginPath();
  ctx.arc(255,140,20,1,1*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
}

function drawHead3(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(255,125,50,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  // left eyebrows
  ctx.beginPath();
  ctx.moveTo(245, 105);
  ctx.lineTo(230, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  // right eyebrows
  ctx.beginPath();
  ctx.moveTo(265, 105);
  ctx.lineTo(280, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // eyes
  ctx.beginPath();
  ctx.arc(240,120,3,0,1*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(270,120,3,0,1*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  //mouth
  ctx.beginPath();
  ctx.moveTo(240, 145);
  ctx.lineTo(270, 145);
  ctx.strokeStyle = "black";
  ctx.lineWidth= 2;
  ctx.stroke();
}

function drawHead4(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(255,125,50,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  // left eyebrows
  ctx.beginPath();
  ctx.moveTo(245, 100);
  ctx.lineTo(230, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  // right eyebrows
  ctx.beginPath();
  ctx.moveTo(265, 100);
  ctx.lineTo(280, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // eyes
  ctx.beginPath();
  ctx.arc(240,120,4,0,2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(270,120,4,0,2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  //mouth
  ctx.beginPath();
  ctx.arc(255,160,20,1*Math.PI,0);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
}

function drawDead(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(255,125,50,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
  // left eyebrows
  ctx.beginPath();
  ctx.moveTo(245, 100);
  ctx.lineTo(230, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  // right eyebrows
  ctx.beginPath();
  ctx.moveTo(265, 100);
  ctx.lineTo(280, 105);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // eyes
  ctx.beginPath();
  ctx.moveTo(265, 115);
  ctx.lineTo(285, 125);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(265, 125);
  ctx.lineTo(285, 115);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(245, 125);
  ctx.lineTo(225, 115);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(245, 115);
  ctx.lineTo(225, 125);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.stroke();
  //mouth
  ctx.beginPath();
  ctx.arc(255,150,10,.8*Math.PI,.6);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
}
