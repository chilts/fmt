// --------------------------------------------------------------------------------------------------------------------
//
// fmt.js - Command line output formatting.
//
// Copyright (c) 2012 Andrew Chilton - http://chilts.org/
// Written by Andrew Chilton <andychilton@gmail.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

const util = require('util');

const stripAnsi = require('strip-ansi');

// --------------------------------------------------------------------------------------------------------------------

const sep  = '===============================================================================';
const line = '-------------------------------------------------------------------------------';
const field = '                    ';
const arrow = '----->  '
const tab = '        '

// --------------------------------------------------------------------------------------------------------------------

// separator
module.exports.separator = function() {
    console.log(sep);
};

// alias the above
module.exports.sep = module.exports.separator;

// line
module.exports.line = function() {
    console.log(line);
};

// title
module.exports.title = function(title) {
    let out = '--- ' + title + ' ';
    const outWithoutAnsi = stripAnsi(out);
    out += line.substr(outWithoutAnsi.length);
    console.log(out);
};

// field
module.exports.field = function(key, value, indent) {
    if ( indent ) {
        console.log(tab + key + field.substr(stripAnsi(key).length) + ' : ' + value);
    }
    else {
        console.log('' + key + field.substr(stripAnsi(key).length) + ' : ' + value);
    }
};

// subfield
module.exports.subfield = function(key, value, indent) {
    if ( indent ) {
        console.log(tab + '- ' + key + field.substr(stripAnsi(key).length + 2) + ' : ' + value);
    }
    else {
        console.log('- ' + key + field.substr(stripAnsi(key).length + 2) + ' : ' + value);
    }
};

// list item
module.exports.li = function(msg, indent) {
    if ( indent ) {
        console.log(tab + '* ' + msg);
    }
    else {
        console.log('* ' + msg);
    }
};

// arrow
module.exports.arrow = function(msg) {
    console.log(arrow + msg);
};

// indent (shorthand for msg(msg, true)
module.exports.indent = function(msg) {
    console.log(tab + msg);
};

// quoteblock
module.exports.quoteblock = function(msg, indent) {
  msg.split(/\n/).forEach(function(m) {
    if ( indent ) {
      console.log('        | ' + m);
    }
    else {
      console.log('| ' + m);
    }
  })
};

// spacer (for completeness)
module.exports.spacer = function() {
  console.log();
};

// dump
module.exports.dump = function(data, name) {
    if ( name ) {
        console.log(name + ' :', util.inspect(data, false, null, true));
    }
    else {
        console.log(util.inspect(data, false, null, true));
    }
};

// msg
module.exports.msg = function(msg, indent) {
    if ( indent ) {
        console.log(tab + msg);
    }
    else {
        console.log(msg);
    }
};

// --------------------------------------------------------------------------------------------------------------------
