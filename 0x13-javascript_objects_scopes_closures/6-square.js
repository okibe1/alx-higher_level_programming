#!/usr/bin/node

// Require the Square class from 5-square.js
const SquareParent = require('./5-square.js');

/**
 * Define a class Square that extends the Square class.
 * The Square class represents a square, which is a special case of a square where all sides are of equal length.
 * The Square class inherits the properties and methods of the SquareParent class.
 */
class Square extends SquareParent {
  /**
   * A method that prints the square using a given character
   * @param {string} c - the character to use for printing the square. If not provided, use 'X'
   */
  charPrint(c) {
    for (let i = 0; i < this.width; i++) {
      if (c === undefined) {
        console.log('X'.repeat(this.height));
      } else {
        console.log(c.repeat(this.height));
      }
    }
  }
}

// Export the Square class for use in other modules
module.exports = Square;
