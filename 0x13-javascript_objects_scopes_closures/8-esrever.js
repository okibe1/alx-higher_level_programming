#!/usr/bin/node

/**
 * A function that returns a reversed version of a given list.
 * @param {Array} list - the list to reverse.
 * @returns {Array} - the reversed version of the input list.
 */
exports.esrever = function(list) {
  // Create an empty array to hold the reversed elements
  const newList = [];

  // Loop through the original list backwards and add each element to the new list
  for (let i = list.length - 1; i >= 0; i--) {
    newList.push(list[i]);
  }

  // Return the reversed list
  return newList;
};
