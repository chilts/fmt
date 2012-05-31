// --------------------------------------------------------------------------------------------------------------------
//
// fmt.js - Command line output formatting.
//
// Copyright (c) 2012 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------

var sep  = '===============================================================================';
var line = '-------------------------------------------------------------------------------';
var field = '                    ';

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
    var out = '--- ' + title + ' ';
    out += line.substr(out.length);
    console.log(out);
};

// field
module.exports.field = function(key, value) {
    console.log('' + key + field.substr(key.length) + ' : ' + value);
};

// list item
module.exports.li = function(msg) {
    console.log('* ' + msg);
};

// --------------------------------------------------------------------------------------------------------------------
