
# Hangman
A simple game of Hangman. Player will have 6 tries to guess the word.

## Pre-reqs
Will might need to install CORS extension in order to retrieve API. I've tested with without the extension and received the follow error: `No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.`

  
    Chrome ext: Allow-Control-Allow-Origin: *
    Firefox ext: CORS Everywhere
    
## Use App
      git clone https://github.com/nphan0114/HangmanApp.git
      cd HangmanApp
      open `index.html` in browser of your choice

## History
    # API Error #
Tried changing the dataType using `$.get(url,function(){}, 'jsonp')` but ran into another error. The error was `Uncaught SyntaxError: Illegal break statement` because it had the word 'break' in the list. The solution I found for this was to install the CORS extensions above and it worked.

    #  Creating keyboard layout #
Oringally created a table with the alphabets in HTML.
Eventually found a better alternative
``` js
var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    letter,
    i;

abc.split('');
for(i in abc){
  if(abc.hasOwnProperty(i)) {
    letter = abc.charAt[i];
    $('#div').append('<div>' + letter + '</div>');
  }
}
```

    # Changed letter Keys interface #
 Originally had the selected letter Key to hide once it's been played by setting the `visibility: none;`
 Later changed it to where if correct, add a checkmark picture to it, otherwise add an x-mark then disable the Key with `pointer-events: none;`


      # Added hangman diagram #
Had to learn JS canvas to draw the stick figure.
Hanger background is drawn by me :D

    # Implement submit letter on keypress #
Implemented feature for user to press key on their press instead of having to use mouse click. I was able to put together the code but ran into a few problems:

    1 - since there's a main menu that requires key input; how to enable keypress after beyong intro menu. 
    Can resolve this by simply not having input in the intro, but I don't want to take that route.
    2 - Need to pass incorrect guess to the incorrect list
I've try adding a boolean `if(introMenuHidden){keypress()};` but was not successful. Need to look for other alternatives.


--Example--
``` js
  $(window).keypress(function(event){
    var thisKey = String.fromCharCode(event.which);
    for (var key in abc) {
      if (abc.hasOwnProperty(key)) {
        var letter = abc.charAt(key);
        if (thisKey == letter || thisKey == letter.toLowerCase()) {
          selectedLetter(letter);
        }
      }
    }
  });
  ```


