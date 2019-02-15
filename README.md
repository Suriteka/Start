# Gulp + Webpack Recipes
## Installation
Install dependencies into your project with NPM.
```
npm i truchot/gulp-recipes
```

In your package.json you need to add 3 scripts.
```
"init": "bzk init",
"start": "bzk start",
"build": "bzk build"
 ```
 
Once it's done, let's run ```npm run init```
This will ask you some questions about your project. WordPress part isn't finished yet.
You now have default files at the root of your project that is important (```.eslint, example.env, .babelrc, ...```), you change change them. But the most important is to create your own .env.

# ENV
You need to construct the skeleton of you architecture as you want it to be.

Configure your environment with `.env` file you'll create at the root of the project. You have an example of the configuration with example.env file.

You need at least 2 constants `SRC` and `DEST` that specify which folders do you want to work with.

`SRC` is your working folder, all your development files are located here like JavaScript, Sass, Less, HTML or PHP files.

`DEST` is your build folder, all compiled files will be located here. 
```
SRC=./src
DEST=./public
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
```
And run gulp task named `scripts`

```
gulp scripts
```
## And more
You can set a folder for *images*, *vendors* (assets that you don't need to be build), *fonts*... You can change folder variables in the `.env` file. When everything is set you can start developing by launching the gulp task named `scripts` or `build` if you want to build.

## Development
When the project environment is ready to go, You can run the npm script

```
npm run start
```

This will generate development files into `DEST` folder

## Build
When the project is ready to go, You can run the npm script

```
npm run build
```

This will generate production files into `DEST` folder

## Roadmap
### Assets
#### Scripts
- [x] ~~JavaScript ES6+ compilation with Babel~~
- [x] ~~JavaScript concatenation & minification~~
- [x] ~~JavaScript bundler with Webpack~~
#### Styles
- [x] ~~Sass compilation~~
- [x] ~~CSS concatenation & minification~~
- [x] ~~Livereload browser during development~~
- [ ] RTL support (https://www.npmjs.com/package/gulp-rtlcss)
- [ ] Generate unminified stylesheet (https://www.npmjs.com/package/gulp-cssbeautify)
- [ ] LESS compilation (https://www.npmjs.com/package/gulp-less)
#### Template
- [x] ~~HTML minification~np~
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
