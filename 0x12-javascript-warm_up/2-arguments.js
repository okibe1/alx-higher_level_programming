#!/usr/bin/node
/* script that prints a message depending
of the number of arguments passed */
const numArgv = process.argv.length;
if (numArgv < 1) {
  console.log('No argument');
} else if (numArgv === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
