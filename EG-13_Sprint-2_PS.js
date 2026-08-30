// 1. Reverse a String
// Write a transformation function that accepts a string as input and returns a new string with its characters reversed in sequence.

/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Expected Input: "hello"
// Expected Output: "olleh"
// 2. Find Maximum
// Write a scanning function that iterates through an array of numbers and extracts the highest single value present in the collection.

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
  let max = nums[0];

  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 5]));

// Expected Input: [3, 7, 2, 9, 5]
// Expected Output: 9
// 3. Check for Palindrome
// Write a validation function that evaluates a text string to determine if it reads identically backward and forward, returning a boolean result.
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("racecar"));

// Expected Input: "racecar"
// Expected Output: true
// 4. Sum Array Elements
// Write an aggregation function that processes an array of numbers and calculates the combined total sum of all contained values.
/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return sum;
}

console.log(sumArray([10, 20, 30, 40]));

// Expected Input: [10, 20, 30, 40]
// Expected Output: 100

// 5. Count Vowels
// Write an analysis function that parses a given string and returns the total frequency count of all vowel characters (a, e, i, o, u).
/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));

// Expected Input: "javascript"
// Expected Output: 3
// 6. Two Sum
// Write a lookup function that scans an array of integers to locate two distinct values adding up to a target sum, returning their corresponding zero-based array indices.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// Expected Input: [2, 7, 11, 15], 9
// Expected Output: [0, 1]
// 7. Flatten a Nested Array
// Write a structural reduction function that processes an arbitrarily deep multi-dimensional array and unrolls all elements into a unified single-level array.
/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5]]));
// Expected Input: [1, [2, [3, 4], 5]]
// Expected Output: [1, 2, 3, 4, 5]

// 8. Group Anagrams
// Write a categorization function that collects an array of strings and clusters all words sharing identical character compositions into sub-arrays.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const groups = new Map();

  for (let str of strs) {
    const key = str.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Expected Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Expected Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// 9. Longest Substring Without Repeating Characters
// Write a sliding window tracking function that analyzes a string to measure the dynamic character length of its longest contiguous substring consisting entirely of distinct characters.
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const seen = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

// Expected Input: "abcabcbb"
// Expected Output: 3
// 10. Deep Clone an Object
// Write a structural cloning function that duplicates a nested JavaScript object recursively, instantiating entirely separate reference memories for all inner properties.
/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
  // Handle primitive values and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle objects
  const clonedObject = {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObject[key] = deepClone(obj[key]);
    }
  }

  return clonedObject;
}

console.log(
  deepClone({
    a: 1,
    b: {
      c: 2,
    },
  }),
);

// Expected Input: { a: 1, b: { c: 2 } }
// Expected Output: { a: 1, b: { c: 2 } }
