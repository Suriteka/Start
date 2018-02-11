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
1. ~~JavaScript~~
2. ~~Sass~~
3. Images optimisation
4. SVG sprites
5. WordPress installation with WP CLI
6. WordPress deploy with WP CLI
7. LESS
