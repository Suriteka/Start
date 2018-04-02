import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cssnano from "gulp-cssnano";
import plumber from "gulp-plumber";
import dotenv from "dotenv";

dotenv.config();

let SASS_SRC = process.env.SRC + "/**/*.scss";
let SASS_DEST = process.env.DEST;

if(process.env.SASS_SRC){
    SASS_SRC = process.env.SASS_SRC;
}

if(process.env.SASS_DEST){
    SASS_DEST = process.env.SASS_DEST;
}

function compileSass() {
    return gulp.src(SASS_SRC)
        .pipe(plumber()) // Prevent pipe breaking caused by errors
        .pipe(sourcemaps.init())
        .pipe(sass()) // Compile SASS to CSS
        .pipe(autoprefixer()) // Add vendor prefixes to CSS rules by Can I Use
        .pipe(cssnano()) // Minify CSS
        .pipe(sourcemaps.write())
        .pipe(plumber.stop())
        .pipe(gulp.dest(SASS_DEST));
};

export { SASS_SRC, SASS_DEST };

const runSass = gulp.series(compileSass);
export default runSass;

gulp.task("sass", runSass);