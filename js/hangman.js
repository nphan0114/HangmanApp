// declare variables
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
i,
guess = 6,
letter,
numChar,
targetDiv,
correctDiv,
name,
secretWord,
introHidden,
api = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
random;
abc.split('');

window.onload = function() {
  $('.hangman-panel').hide();
  $('.abc').hide();
  $('#canvas').hide();
  $('.game-over').hide();
  $('.intro input').focus();
  $('.player-two').hide();
  introHidden = false;
}

// reset values & hide neccessary menus
function newGame(gameType){
  $('.intro').hide();
  $('.hangman-panel').show();
  $('#canvas').show();
  $('.abc').fadeIn(200);
  $('.game-over').hide();
  guess = 6;
  drawHanger();
  $('.hangman-panel').css('opacity','1');
  $('.guess-count').text('Lives: ' + guess);
  resetToDefaults();
  resetSecretWord();
  if (gameType=="multiplayer") {
    secretWord = prompt("Enter secret word").toUpperCase();
    numChar = secretWord.length;
    underScore();
  }
  if (gameType=="singleplayer"){
  getSecretWord();
  }
  introHidden = true; // for keypress implementation
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
  $('.incorrect-letters').text('Incorrect guesses: ');
}

// clear secretWord field and set new word
function resetSecretWord(){
  //reset secretWord to blank underscores
  $('.hangman-secret-word[name="game-lost"]').each(function(div) {
    var resetLine = $(this)[div];
    resetLine.setAttribute('name','');
  });
  //reset secretWord to blank underscores
  $('.hangman-secret-word').each(function(div){
    var resetLineW = $(this)[div];
    var lineChildren = resetLineW.children;
    for (var k in lineChildren) {
      if (lineChildren.hasOwnProperty(k)) {
        lineChildren[k].setAttribute('class','underscore');
      }
    }
  });
  $('.hangman-secret-word').text('');
}

// multiplayer
function multiplayer() {
  $('.player-two').show();
  var playerOne = $('.player-one').val().length;
  var playerTwo = $('.player-two').val().length;
  if(playerOne==0){
    alert("Enter name for player 1.");
    return false;
  }
  if(playerTwo==0){
    alert("Enter name for player 2.");
    return false;
  }
  newGame("multiplayer");
}

// single player
function singleplayer(){
  var playerOne = $('.player-one').val().length;
  if(playerOne==0){
    alert("Please a name.");
    return;
  }
  newGame("singleplayer");
}

// submit letter on clicks
function getSelectedLetter(){
  targetDiv = event.target || event.srcElement;
  letter = targetDiv.id;
  // Do nothing if letter already played
  selectedLetter(letter);
}

// populate onscreen keyboard
for (i in abc) {
  if (abc.hasOwnProperty(i)) {
    letter = abc.charAt(i);
    // populate on screen keys
    $('.abc').append('<div onclick="getSelectedLetter()" class="alphabets" id="'+letter+'" value="'+letter+'">'+letter+'</div>');
  }
}

// set empty slot for numLetter in secretWord
function underScore(){
  for(i=0; i<secretWord.length; i++){
    var hiddenLetter = secretWord[i];
    // assign underscore to Num letters in secretWord
    $('.hangman-secret-word').append('<div class="underscore" value="'+hiddenLetter+'">'+'<label>'+hiddenLetter+'</label>'+'</div>');
    // reveal block if word contrains a hyphen (-) and minus X numChar
    if (hiddenLetter=='-') {
      correctDiv = $('.hangman-secret-word .underscore[value="-"]');
      correctDiv.addClass('correct');
      // add class 'correct' to correct key
      numChar--;
    }
  }
}

// Name submit on enter key press
$('.intro input').keyup(function(event){
  if(event.keyCode == 13){
    $('.word-game').click();
  }
});

// detect keyboard press - work in progress
$(window).keypress(function(event){
  if(introHidden){
    thisKey = String.fromCharCode(event.which).toUpperCase();
    targetDiv = document.getElementById(thisKey);
    if (targetDiv.className == 'correctKey' || targetDiv.className == 'wrongKey') {
      return false;
    }
    selectedLetter(thisKey);
  }
});

// Get a random word from word bank API and set blank underscores
function getSecretWord() {
  $.get(api,function(data){
    secretWord = data.word.toUpperCase();
    numChar = secretWord.length;
    underScore();
  });
}

/* Get user selected letter and check if it's in the secretWord
* Reveal hiddenLetter if it's found in secretWord
*/
function selectedLetter(thisLetter){
  var checkedLetter = checkLetter(secretWord, thisLetter);
  if (checkedLetter) {
    checkedLetter.forEach(function(){
      correctDiv = $('.hangman-secret-word .underscore[value="'+thisLetter+'"]');
      correctDiv.addClass('correct');
      // add class 'correct' to correct key
      document.getElementById(thisLetter).setAttribute('class','correctKey');
      numChar--;
    });
  } else {
    document.getElementById(thisLetter).setAttribute('class','wrongKey');
    badGuess(thisLetter);
  }

  if (numChar < 1) {
    gameOver(true);
  }
  if (guess < 0) {
    gameOver(false);
    $('.guess-count').text("Lives: x_x");
    $('.hangman-secret-word').each(function(div){
      $(this)[div].setAttribute('name','game-lost');
    });
  }
}

/* Check if letter exist in secretWord
* get the indexes if word exist and return true; otherwise false;
*/
function checkLetter(secretWord, checkLetter){
  indexes = [];
  secretWord.split('').forEach(function(letter, index){
    if(letter == checkLetter){
      indexes.push(index);
    }
  });
  return indexes.length > 0 ? indexes : false;
}

// Letter doesn't exist in secretWord; show guessed word and minus life
function badGuess(thisLetter) {
  guess--;
  $('.incorrect-letters').append(' ' + thisLetter);
  $('.guess-count').text("Lives: " + guess);

  // draw body part for each wrong guesses.
  switch (guess) {
    case 5:
    drawHead();
    break;
    case 4:
    drawBody();
    break;
    case 3:
    drawLeftArm();
    drawHead2(); // change face
    break;
    case 2:
    drawRightArm();
    break;
    case 1:
    drawLeftLeg();
    drawHead3(); // change face
    break;
    case 0:
    drawRightLeg();
    drawHead4(); //change face
    break;
    default:  drawDead();
  }
}

// game over pop menu; give option to play again
function gameOver(won) {
  if(!won) {
    $('.game-over').show();
    $('.win').hide();
    $('.lose').show();
  } else {
    drawHead();
    $('.game-over').show();
    $('.lose').hide();
    $('.win').show();
  }
  $('.hangman-panel').css('opacity','.4');
  $('.play-again').focus();
}