'use strict';

/*Use the node fs module
Accepts a file name as a command line parameter
Reads in the contents of the file specified with the CLI (test it out with that test.txt file)
Creates a random value (using Math.random() or maybe faker()
Puts that random value into the file
Save the file
Re-Open and read the file contents
Emit a console.log() that shows the contents before and after the operations are completed.*/

const fs = require('fs');

fs.writeFile('files/test.txt', Math.floor(Math.random() * 9001), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log('Saved');
}); 

fs.readFile('files/test.txt', (err, data) => {
  if(err) { throw new Error(err); }
  let contents = data.toString();
  console.log(data, contents);
});