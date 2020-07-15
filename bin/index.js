#!/usr/bin/env node

const R = require('ramda');
const picompiler = require('picompiler');
const config = require('../src/picompiler.config.js');

picompiler(config);
