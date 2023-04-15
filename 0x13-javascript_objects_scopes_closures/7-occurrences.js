#!/usr/bin/node

/**
 * A function that returns the number of occurrences of a given element in a list.
 * @param {Array} list - the list to search for the element.
 * @param {*} searchElement - the element to search for.
 * @returns {number} - the number of times the element occurs in the list.
 */
exports.nbOccurences = function(list, searchElement) {
  // Initialize a variable to keep track of the number of occurrences
  let times = 0;

  // Loop through the list and check each element against the search element
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      times += 1;
    }
  }

  // Return the number of occurrences
  return times;
};
