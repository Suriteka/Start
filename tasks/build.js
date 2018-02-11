import gulp from "gulp";
import runSass from "./sass";
import runScripts from "./scripts";

const runBuild = gulp.series( gulp.parallel(runSass, runScripts));
export default runBuild;

gulp.task("build", runBuild);