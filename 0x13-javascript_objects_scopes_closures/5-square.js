#!/usr/bin/node

// Require the Rectangle class from 4-rectangle.js
const Rectangle = require('./4-rectangle');

/**
 * Define a class Square that extends the Rectangle class.
 * The Square class represents a square, which is a special case of a rectangle where all sides are of equal length.
 * The Square class inherits the properties and methods of the Rectangle class.
 */
class Square extends Rectangle {
  constructor(size) {
    // Call the constructor of the Rectangle class with size as both the width and height arguments
    super(size, size);
  }
}

// Export the Square class for use in other modules
module.exports = Square;
