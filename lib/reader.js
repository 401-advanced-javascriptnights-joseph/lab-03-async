'use strict';

/*Fix reader.js so that the files are read in the order specified on the command line AND returns an array of their contents in that same order.
Once you do this, index.js should give you the right content and your tests should pass!*/

const fs = require('fs');
let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll([...files],callback);
  contents = [];
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths, callback) => {

  let contents = [];
  for (let i = 0; i < paths.length; i++) {
    readOne(paths[i], (err, data) => {
      if (err) {
        callback(err);
      }
      else {
        console.log('Read File 1');
        contents.push(data.toString().trim());
      }
    });
  }

  callback(undefined, contents);
};

