import gulp from "gulp";
import htmlMinify from "gulp-html-minify";
import dotenv from "dotenv";

dotenv.config();

let HTML_SRC = process.env.SRC + "/**/*.html";
let HTML_DEST = process.env.DEST;

if(process.env.HTML_SRC){
    HTML_SRC = process.env.HTML_SRC;
}

if(process.env.HTML_DEST){
    HTML_DEST = process.env.HTML_DEST;
}

function compileHtml() {
    return gulp.src(HTML_SRC)
        .pipe(htmlMinify())
        .pipe(gulp.dest(HTML_DEST));
}

export { HTML_SRC, HTML_DEST };

const runHtml = gulp.series(compileHtml)
export default runHtml;

gulp.task("html", runHtml );

