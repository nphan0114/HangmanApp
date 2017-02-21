
# Hangman
A simple game of Hangman. Player will have 6 tries to guess the word.

## Pre-reqs
Will might need to install CORS extension in order to retrieve API. I've tested with without the extension and received the follow error: `No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.`

  
    Chrome ext: Allow-Control-Allow-Origin: *
    Firefox ext: CORS Everywhere

## Usage
TODO: Write usage instructions

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b your-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin your-new-feature`
5. Submit a pull request :D

## History
    # API Error #
Tried changing the dataType using `$.get(url,function(){}, 'jsonp')` but ran into another error. The error was `Uncaught SyntaxError: Illegal break statement` because it had the word 'break' in the list. The solution i found for this was to install the CORS extensions above and it worked.

