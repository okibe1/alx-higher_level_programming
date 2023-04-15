#!/usr/bin/node

// Define a class Rectangle that also represents a rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

// Export the Rectangle class for use in other modules
module.exports = Rectangle;
