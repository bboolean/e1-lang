#!/usr/bin/env node

const R = require('ramda');
const { build } = require('picompiler');
const config = require('../src/picompiler.config.js');

build(config);
