import gulp from "gulp";
import runSass from "./sass";
import runScripts from "./scripts";
import runHtml from "./html";

const runBuild = gulp.series(runHtml, gulp.parallel(runSass, runScripts));
export default runBuild;

gulp.task("build", runBuild);