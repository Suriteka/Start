import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import plumber from "gulp-plumber";
import dotenv from "dotenv";

dotenv.config();

let JS_SRC = process.env.SRC + "/**/*.js";
let JS_DEST = process.env.DEST;

if(process.env.JS_SRC){
    JS_SRC = process.env.JS_SRC;
}

if(process.env.JS_DEST){
    JS_DEST = process.env.JS_DEST;
}

function compileScripts() {
    return gulp.src(JS_SRC)
        .pipe(plumber()) // Prevent pipe breaking caused by errors
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(JS_DEST));
};

export { JS_SRC, JS_DEST };

const runScripts = gulp.series(compileScripts);
export default runScripts;

gulp.task("scripts", runScripts);