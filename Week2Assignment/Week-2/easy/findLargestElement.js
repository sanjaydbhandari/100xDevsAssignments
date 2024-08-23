/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length<2)
        return "can't compare! should have atleast 2 numbers."
    return numbers.sort()[numbers.length-1]
}

let nums = [3, 7, 2, 9, 1];
let firstLargestElement = findLargestElement(nums)
console.log(firstLargestElement)

module.exports = findLargestElement;