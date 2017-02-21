
# Hangman
A simple game of Hangman. Player will have 6 tries to guess the word.

## Pre-reqs
Will might need to install CORS extension in order to retrieve API. I've tested with without the extension and received the follow error: `No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.`

  
    Chrome ext: Allow-Control-Allow-Origin: *
    Firefox ext: CORS Everywhere

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





