# Gulp Recipes
## Installation
Install dependencies
```
npm i
```
Configure your environment with `.env` file. 
You need at least 2 constants `SRC` and `DEST` that specify which folders do you want to work with.

`SRC` is your working folder, all your development files are located here like JavaScript, Sass, Less, HTML or PHP files.

`DEST` is your build folder, all compiled files will be located here. 
```
SRC=./src
DEST=./public
```

## Working with JavaScript
You can add `JS_SRC` and `JS_DEST` constants in your `.env` file, to specify custom directories for your JavaScript files, like this:
```
JS_SRC=./src/scripts/**/*.js
JS_DEST=./assets/scripts/
```
You can run only JavaScript files compilation with gulp task named `scripts`
```
gulp scripts
```

## Working with Sass
You can add `SASS_SRC` and `SASS_DEST` constants in your `.env` file, to specify custom directories for your Sass files, like this:
```
SASS_SRC=./src/styles/**/*.scss
SASS_DEST=./assets/styles/
```
And run gulp task named `sass`

```
gulp sass
```

## TODO
* Scripts
    * ~~JavaScript~~
* Styles
    * ~~Sass~~
    * LESS
* Images 
    * Optimisation
    * SVG sprites
* Server
    * ~~BrowserSync (live-reload)~~
* WordPress with[WP CLI](http://wp-cli.org/ "The command line interface for WordPress")
    * Installation
    * Deploy
