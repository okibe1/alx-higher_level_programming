#!/usr/bin/node

/**
 * Define a class Rectangle that represents a rectangle with a given width and height.
 * The constructor function initializes the width and height properties of the rectangle 	 object only if both w and h are positive numbers.
 */
class Rectangle {
  constructor(width, height) {
    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }
}

// Export the Rectangle class for use in other modules
module.exports = Rectangle;
