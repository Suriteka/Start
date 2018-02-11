# Gulp Recipes
## Installation
Install dependencies :
```
npm i
```
Configure your environment with `.env` file
```
JS_SRC=src/scripts/**/*.js
JS_DEST=assets/scripts/
```
```
SASS_SRC=src/styles/**/*.scss
SASS_DEST=assets/styles/
```

## Run gulp with JavaScript :
Be sure you have `JS_SRC` and `JS_DEST` constants in your `.env` file
```
gulp scripts
```

## Run gulp with Sass :
Be sure you have `SASS_SRC` and `SASS_DEST` constants in your `.env` file
```
gulp sass
```
___
*** 
### TODO
* Scripts
    * ~~JavaScript~~
* Styles
    * ~~Sass~~
    * LESS
* Images 
    * Optimisation
    * SVG sprites
* WordPress
    * Installation with WP CLI
    * Deploy with WP CLI
