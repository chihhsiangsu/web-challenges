// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  // TODO:
  /*
  1. write an if condition to compare two number
  2. If num1 > num2 is true, return num1. Else return num2. 
  */
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(100, 50));

// Find the longest word

// TODO:
/*
  1. Sort the array with an array method 'toSorted' to campare the length of the element in the array.
  2. Set parameter a and b, which means the elements will compare to each other, we will let the methond to compare with their length.
  3. the array method will return a new array with the descending order in length.
  4. Get the longest word from catching the 0 position in the arry.
  */

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  const longestWordComeFirst = words.toSorted((a, b) => b.length - a.length);
  const theLongestWord = longestWordComeFirst[0];
  return theLongestWord;
}
console.log(findLongestWord(words));

// Calculate the sum

// TODO:
/*
1. I will try to use Array methond 'reduce' to solve this task
2. The first element in the array will add with the second element and the sum will 
become the first element in the arry to add with the next element.
3. In the end, there is only one number in the array and we can return this number.
*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  const sum = numbers.reduce((a, b) => a + b);
  return sum;
}

console.log(sumNumbers(numbers));

// Calculate the average length of the words

// TODO:
//1. use array method map to convert the elements in the array to their length and create a new array.
//2. use array method reduse to make the number add to each other, then return a total word length
//3. let totalWordLength devide by the length of word2 array

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words2) {
  const newArrayWithLength = words2.map((word) => {
    return word.length;
  });
  const totalWordLength = newArrayWithLength.reduce((a, b) => a + b);
  const averageWordLength = totalWordLength / words2.length;
  return averageWordLength;
}

console.log(averageWordLength(words2));

// Unique arrays - return an array without duplicates

// TODO:
//1. I would like use the array method filter to solve this task
//2. The callback function we pass to .filter() takes two arguments: the element itself and its index in the array.
//3. Inside the function, we check if the current element’s index is equal to the index of its first appearance in the array, using .indexOf().
//4. If this is true, the element is unique so far, and it stays in the filtered array. Otherwise, it’s a duplicate and gets removed.

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words3) {
  return words3.filter((value, index) => words3.indexOf(value) === index);
}
console.log(uniquifyArray(words3));

// Find elements

// TODO:
//1. we can use an array methods called includes to check if the target element is in the wordsFind array.
//2. we pass two arguments array and targetElelment to the includes function.
//3. if the provided array includes the targetElement, the doesWordExist returns a string showing the target element is in the array.
//4. if not, the the doesWordExist returns `not found`.
//5. we can test the function by passing the wordsFind and "matter" to the doesWordExist function

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, targetElement) {
  if (array.includes(targetElement)) {
    return `${targetElement}is in the array`;
  } else {
    return `not found`;
  }
}
console.log(doesWordExist(wordsFind, "matter"));

// Count repetition

// TODO:
//1. we can use an array method filter to solve this task
//2. first we pass to argumants haystack and needle as provided to the call back function
//3. in the fuction, we filter all element in the haystack with the argument needle
//4. it returns a new array which only contains the element euqual to needle
//5. in the end, let the function return the length of the new array
//6. we can tset the function with the arguments wordsCount and "matter"

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  const newArray = haystack.filter((element) => element === needle);
  return newArray.length;
}

console.log(howManyTimes(wordsCount, "matter"));

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // TODO:
}

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
