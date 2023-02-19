#!/usr/bin/python3
"""Coordinates of a square"""


class Square:
    """Private instance attribute: size
    Instantiation with area and position method"""

    def __init__(self, size=0, position=(0, 0)):
        """Initialize attribute size"""
        self.size = size
        self.position = position

    def area(self):
        """Calculate are of square"""
        return (self.__size * self.__size)

    @property
    def size(self):
        """Getter for square"""
        return self.__size

    @size.getter
    def size(self, value):
         """Initializes attribute position"""
        if len(value) is not 2:
            raise TypeError("position must be a tuple of 2 positive integers")
        if (type(value[0]) is not int or value[0] < 0):
            raise TypeError("position must be a tuple of 2 positive integers")
        if (type(value[1]) is not int or value[1] < 0):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def my_print(self):
        """Print method"""
        print(self.__str__())

    def __str__(self):
        """Print representation of squares"""
        if self.size == 0:
            return
        else:
            str = '\n' * self.__position[1]
        for i in range(self.__size):
            str += ' ' * self.position[0]
            str += '#' * self.__size + '\n'
        return str[:-1]
