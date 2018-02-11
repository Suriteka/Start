import gulp from 'gulp';
import HubRegistry from 'gulp-hub';

const hub = new HubRegistry(['./tasks/*.js']);

gulp.registry(hub);