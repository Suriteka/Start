# Gulp Recipes
## Installation
Install dependencies
```
git clone https://github.com/truchot/gulp-recipe/
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
## Working with JavScript
You can add `JS_SRC` and `JS_DEST` constants in your `.env` file, to specify custom directories for your JavaScript files, like this:
```
JS_SRC=./src/scripts/**/*.js
JS_DEST=./public/scripts/
```
And run gulp task named `scripts`

```
gulp scripts
```
## And more
You can set a folder for *images*, *vendors* (assets that you don't need to be build), *fonts*... You can change folder variables in the `.env` file. When everything is set you can start developing by launching the gulp task named `scripts` or `build` if you want to build.

You can also launch gulp tasks one by one by writing `gulp` and the name of the task. For example: 
- `gulp accessibility`


## TODO
### Assets
#### Scripts
- [x] ~~JavaScript ES6+ compilation with Babel~~
- [x] ~~JS concatenation & minification~~
#### Styles
- [x] ~~Sass compilation~~
- [ ] LESS compilation (https://www.npmjs.com/package/gulp-less)
- [x] ~~CSS concatenation & minification~~
- [ ] RTL support (https://www.npmjs.com/package/gulp-rtlcss)
- [ ] Generate unminified stylesheet (https://www.npmjs.com/package/gulp-cssbeautify)
#### Template
- [x] ~~HTML minification~~
#### Fonts
- [ ] Generate missing extension (https://www.npmjs.com/package/gulp-ttf2woff)
#### Images
- [ ] Optimize images (https://www.npmjs.com/package/gulp-imagemin)
- [ ] Create SVG sprites (https://www.npmjs.com/package/gulp-svgstore)
- [ ] Convert images to [WebP](https://developers.google.com/speed/webp/ "A new image format for the Web") (https://www.npmjs.com/package/gulp-webp)
### Workflow
- [x] ~~Livereload browser during development~~
- [ ] Clean destination folder on build
- [ ] Zip builded files 
- [ ] Check accessibility (https://www.npmjs.com/package/gulp-accessibility)
- [ ] Create release
- [ ] Changelog based on commits 
### Framework
- [ ] WordPress Installation with [WP CLI](http://wp-cli.org/ "The command line interface for WordPress")
- [ ] Generate POT file (https://www.npmjs.com/package/gulp-wp-pot)
- [ ] Deploy WordPress with [WP CLI](http://wp-cli.org/ "The command line interface for WordPress")