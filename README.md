# Gulp + Webpack Recipes
## Installation
Install dependencies
```
git clone https://github.com/truchot/gulp-recipes/
```
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

Launch a static server and watch for HTML, JS, Sass files any changes with :
```
npm run start
```
By default it serves current directory, if you want to use proxy, you can add `URL` constant in your `.env` file, like this:
```
URL=http://example.local
```
## Working with HTML
You can add `HTML_SRC` and `HTML_DEST` constants in your `.env` file, to specify custom directories for your HTML files, like this:
```
HTML_SRC=./src/html/**/*.html
HTML_DEST=./public/html/
```
And run gulp task named `html`

```
gulp html
```
## Working with Sass
You can add `SASS_SRC` and `SASS_DEST` constants in your `.env` file, to specify custom directories for your Sass files, like this:
```
SASS_SRC=./src/styles/**/*.scss
SASS_DEST=./public/styles/
```
And run gulp task named `sass`

```
gulp sass
```
## Working with JavaScript
You can add `JS_SRC` and `JS_DEST` constants in your `.env` file, to specify custom directories for your JavaScript files, like this:
```
JS_SRC=./src/scripts/**/*.js
JS_DEST=./public/scripts/
JS_NAME='bundle.js'
```
And run gulp task named `scripts`

```
gulp scripts
```
## And more
You can set a folder for *images*, *vendors* (assets that you don't need to be build), *fonts*... You can change folder variables in the `.env` file. When everything is set you can start developing by launching the gulp task named `scripts` or `build` if you want to build.
 

## Build
When the project is ready to go, You can run the npm script

```
npm run build
```

This will generate a production files into `DEST` folder

## Roadmap
### Assets
#### Scripts
- [x] ~~JavaScript ES6+ compilation with Babel~~
- [x] ~~JavaScript concatenation & minification~~
#### Styles
- [x] ~~Sass compilation~~
- [x] ~~CSS concatenation & minification~~
- [x] ~~Livereload browser during development~~
- [ ] RTL support (https://www.npmjs.com/package/gulp-rtlcss)
- [ ] Generate unminified stylesheet (https://www.npmjs.com/package/gulp-cssbeautify)
- [ ] LESS compilation (https://www.npmjs.com/package/gulp-less)
#### Template
- [x] ~~HTML minification~~
#### Fonts
- [x] ~~Generate missing extension~~
#### Images
- [x] ~~Optimize images~~
- [ ] Create SVG sprites (https://www.npmjs.com/package/gulp-svgstore)
- [ ] Convert images to [WebP](https://developers.google.com/speed/webp/ "A new image format for the Web") (https://www.npmjs.com/package/gulp-webp)
### Workflow
- [x] ~~Livereload browser during development~~
- [x] ~~Clean destination folder on build~~
- [x] ~~Check accessibility~~
- [ ] Zip builded files 
- [ ] Create release
- [ ] Changelog based on commits
- [ ] Zip builded files 
### Framework
- [ ] WordPress Installation with [WP CLI](http://wp-cli.org/ "The command line interface for WordPress")
- [ ] Generate POT file (https://www.npmjs.com/package/gulp-wp-pot)
- [ ] Deploy WordPress with [WP CLI](http://wp-cli.org/ "The command line interface for WordPress")