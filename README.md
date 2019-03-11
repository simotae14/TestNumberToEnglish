# Project Convert Numbers to English

## Requirements

For development, you will only need Node.js and Npm installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v11.11.0

    $ npm --version
    6.7.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---
## Live Version of the solution in Heroku

[Heroku Converts Number English](https://converts-number-english-tae.herokuapp.com/)


## Install all the dependencies for the server and the client side

    $ git clone https://github.com/simotae14/TestNumberToEnglish.git
    $ cd TestNumberToEnglish
    $ npm install
    $ npm i nodemon -g
    $ cd client
    $ npm install

## Start & watch

    $ npm run dev

## Test of the numberToWords function

    $ npm run test


## Simple build for production

    $ npm run build


## Languages & tools

### CSS Framework

- [Material UI](https://material-ui.com/)

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### Test functionality

- [Mocha](https://mochajs.org/) to run the function tests.

### Deploy

- [Heroku](https://www.heroku.com/)

### Documentation React part

- [react-docgen](https://github.com/reactjs/react-docgen)

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.