#!/usr/bin/node

/**
 * Define a class Rectangle that represents a rectangle with a given width and height.
 * The constructor function initializes the width and height properties of the rectangle object
 * only if both w and h are positive numbers.
 */
class Rectangle {
  constructor(width, height) {
    if (width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  /**
   * The print() method prints a rectangle using the 'X' character.
   * The number of rows and columns in the rectangle are determined by the width and height properties of the rectangle object.
   */
  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  /**
   * The rotate() method rotates the rectangle by 90 degrees.
   * This is done by swapping the width and height properties of the rectangle object.
   */
  rotate() {
    this.width += this.height;
    this.height = this.width - this.height;
    this.width -= this.height;
  }

  /**
   * The double() method doubles the size of the rectangle by multiplying the width and height properties by 2.
   */
  double() {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
}

// Export the Rectangle class for use in other modules
module.exports = Rectangle;
