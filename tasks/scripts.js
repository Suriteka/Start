import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import dotenv from "dotenv";

dotenv.config();

gulp.task("scripts", function () {
    return gulp.src(process.env.JS_SRC)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(process.env.JS_DEST));
});