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

Launch a static server and watch HTML, JS, Sass updates with :
```
npm run start
```
By default it serves current directory, if you want to use proxy, you can add `URL` constant in your `.env` file, like this:
```
URL=http://example.local
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
## Working with HTML
You can add `HTML_SRC` and `HTML_DEST` constants in your `.env` file, to specify custom directories for your HTML files, like this:
```
HTML_SRC=./src/html/**/*.html
HTML_DEST=./assets/html/
```
And run gulp task named `sass`

```
gulp html
```

## TODO
- [x] ~~JavaScript ES6+ compilation with Babel~~
- [x] ~~JS concatenation & minification~~
- [x] ~~Sass compilation~~
- [x] ~~CSS concatenation & minification~~
- [x] ~~Livereload browser during development~~
- [x] ~~HTML minification~~
- [ ] Clean destination folder on build
- [ ] LESS compilation
- [ ] Optimize images
- [ ] Create SVG sprites
- [ ] WordPress Installation with [WP CLI](http://wp-cli.org/ "The command line interface for WordPress")
- [ ] Deploy WordPress with [WP CLI](http://wp-cli.org/ "The command line interface for WordPress")