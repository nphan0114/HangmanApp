// declare variables
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
i,
guess = 6,
letter,
numChar,
targetDiv,
hiddenLetter,
correctDiv,
name,
word = [],
secretWord,
api = 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words',
random;
abc.split('');

window.onload = function() {
  $('.hangman-panel').hide();
  $('.abc').hide();
  $('#canvas').hide();
  $('.game-over').hide();
}

// reset values & hide neccessary divs
function newGame(){
  $('.intro').hide();
  $('.hangman-panel').show();
  $('#canvas').show();
  $('.abc').fadeIn(200);
  $('.game-over').hide();
  guess = 6;
  drawHanger();
  $('.guess-count').text("Lives: " + guess);
  $('.hangman-panel').css('opacity','1');
  resetToDefaults();
  resetSecretWord();
  getSecretWord();
}

// default setting functions
function resetToDefaults(){
  //reset alphabets
  $('.abc').each(function(div) {
    var defaultKey = $(this)[div].children;
    for (var key in defaultKey) {
      if (defaultKey.hasOwnProperty(key)) {
        defaultKey[key].setAttribute('class','alphabets');
      }
    }
  });
  $('.incorrect-letters').text('Already guessed: ');
}

// clear secretWord field and set new word
function resetSecretWord(){
    $('.game-lost').each(function(div) {
      var resetLine = $(this)[div];
      var lineChildren = resetLine.children;
      for (var j in lineChildren) {
        if (lineChildren.hasOwnProperty(j)) {
          lineChildren[j].setAttribute('class','underscore');
        }
      }
      resetLine.setAttribute('class','hangman-secret-word');
      $(this).text('');
  });
}

// Hangman with single word
function startWordGame() {
  name = $('.player-name').val().length;
  if(name==0){
    alert("Please a name.");
    return;
  }
  $('.guess-count').text("Lives: " + guess);
  drawHanger();
  newGame();
}

// populate onscreen keyboard
for (i in abc) {
  if (abc.hasOwnProperty(i)) {
    letter = abc.charAt(i);
    $('.abc').append('<div onclick="selectedLetter()" class="alphabets" id="'+letter+'" value="'+letter+'">'+letter+'</div>');
  }
}

// set empty slot for numLetter in secretWord
function underScore(){
  for(i=0; i<secretWord.length; i++){
    hiddenLetter = secretWord[i];
    $('.hangman-secret-word').append('<div class="underscore" value="'+hiddenLetter+'">'+'<label>'+hiddenLetter+'</label>'+'</div>');
  }
}

// get word bank api
  $.get(api,function(data){
    word = data.split('\n');
  });


// Get a random word from word bank API
function getSecretWord() {
  // $.get(api, function(data){
  //   word = data.split('\n');
    random = Math.floor(Math.random() * word.length);
    secretWord = word[random].toUpperCase();
    numChar = secretWord.length;
    underScore();
  // });
}

// phrases game - optional


/* Get user selected letter and check if it's in the secretWord
* Reveal hiddenLetter if it's found in secretWord
*/
function selectedLetter(){
  targetDiv = event.target || event.srcElement;
  letter = targetDiv.id;
  var checkedLetter = checkLetter(secretWord, letter);
  if (checkedLetter) {
    checkedLetter.forEach(function(item){
      hiddenLetter = secretWord[item];
      correctDiv = $('.hangman-secret-word .underscore[value="'+letter+'"]');
      correctDiv.addClass('correct');
      // add class 'correct' to correct key
      document.getElementById(letter).setAttribute('class','correctKey');
      numChar--;
    });
  } else {
    document.getElementById(letter).setAttribute('class','wrongKey');
    badGuess();
    switch (guess) {
      case 5:
      drawHead();
      break;
      case 4:
      drawBody();
      break;
      case 3:
      drawLeftArm();
      drawHead2();
      break;
      case 2:
      drawRightArm();
      break;
      case 1:
      drawLeftLeg();
      drawHead3();
      break;
      case 0:
      drawRightLeg();
      drawHead4();
      break;
      default:  drawDead();
    }
  }

  if (numChar < 1) {
    gameOver(true);
  }
  if (guess < 0) {
    gameOver(false);
    $('.guess-count').text("Lives: x_x");
    $('.hangman-secret-word').each(function(div){
      $(this)[div].setAttribute('class','game-lost');
    });
  }
}

/* Check if letter exist in secretWord
* get the indexes if word exist and return true; otherwise false;
*/
function checkLetter(secretWord, thisLetter){
  indexes = [];
  secretWord.split('').forEach(function(letter, index){
    if(letter == thisLetter){
      indexes.push(index);
    }
  });
  return indexes.length > 0 ? indexes : false;
}

// Letter doesn't exist in secretWord; show guessed word and minus life
function badGuess() {
  guess--;
  targetDiv = event.target || event.srcElement;
  letter = targetDiv.id;
  $('.incorrect-letters').append(' ' + letter);
  $('.guess-count').text("Lives: " + guess);
  return false;
}

// game over
function gameOver(won) {
  if(!won) {
    $('.game-over').show();
    $('.win').hide();
    $('.lose').show();
    $('.hangman-panel').css('opacity','.4');
  } else {
    $('.game-over').show();
    $('.lose').hide();
    $('.win').show();
    $('.hangman-panel').css('opacity','.4');
  }
}

// canvas drawing
function drawHanger(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("hanger");
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
}


// right arm
function drawRightArm(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(255, 185);
  ctx.lineTo(315, 330);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(315,330,6,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
}
// left arm
function drawLeftArm(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(255, 185);
  ctx.lineTo(215, 330);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#74E2F3";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(215,330,7,0,2*Math.PI);
  ctx.strokeStyle = "#74E2F3";
  ctx.fillStyle = "#74E2F3";
  ctx.lineWidth= 5;
  ctx.stroke();
  ctx.fill();
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
