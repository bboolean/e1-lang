#!/usr/bin/env node

const R = require('ramda');
const { build } = require('picompiler');
const config = require('../src/picompiler.config.js');
const nodemon = require('nodemon');

if (process.argv[2]) {
  let restartNum = 1;

  nodemon({
    script: process.cwd() + '/' + process.argv[2],
    ext: 'js',
  });

  nodemon
    .on('quit', function () {
      process.exit();
    })
    .on('restart', function (files) {
      console.log(
        `\n\n---------------------------------------${restartNum++}`
      );
    });
} else {
  build(config);
}
