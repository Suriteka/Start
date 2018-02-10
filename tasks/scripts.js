import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import { paths } from "../config";

gulp.task("scripts", function () {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.scripts.dest));
});