import gulp from "gulp";
import browserSync from "browser-sync";
import dotenv from "dotenv";
import runBuild from "./build";
import runSass, { SASS_SRC } from "./sass";
import runScripts, { JS_SRC } from "./scripts";

const server = browserSync.create();

function reload(done) {
    server.reload();
    done();
}

function serve(done){

    dotenv.config();

    let options = {
        server: {
            baseDir: process.env.DEST
        }
    };

    if( process.env.URL ) {
        options = {
            proxy: process.env.URL
        };
    }

    server.init( options );
    done();
}

const watchSass = () => gulp.watch(SASS_SRC, gulp.series(runSass, reload));
const watchScripts = () => gulp.watch(JS_SRC, gulp.series(runScripts, reload));

const runWatch = gulp.parallel(watchSass, watchScripts);
const runServe = gulp.series(runBuild, serve, runWatch);

gulp.task("serve", runServe);

