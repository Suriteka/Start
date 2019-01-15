#!/usr/bin/env node
'use strict';

var shell = require('shelljs');

shell.exec('npx babel-node gulpfile.babel.js');
shell.exec('gulp dev');