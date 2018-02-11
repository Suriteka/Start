import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cssnano from "gulp-cssnano";
import dotenv from "dotenv";

dotenv.config();

gulp.task("sass", function () {
    return gulp.src(process.env.SASS_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass()) // Compile SASS to CSS
        .pipe(autoprefixer()) // Add vendor prefixes to CSS rules by Can I Use
        .pipe(cssnano()) // Minify CSS
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(process.env.SASS_DEST));
});