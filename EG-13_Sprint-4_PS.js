// 01. Isomorphic Strings
// Write a validation function that determines whether two strings are isomorphic. Each character in the first string must map to exactly one character in the second string, while preserving the order of characters.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // s -> t mapping
    if (mapST[charS] && mapST[charS] !== charT) {
      return false;
    }

    // t -> s mapping
    if (mapTS[charT] && mapTS[charT] !== charS) {
      return false;
    }

    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
};
// Expected Input: "egg", "add"
// Expected Output: true
// 02. Word Pattern
// Write a validation function that determines whether a string follows a given word pattern. Each pattern character must map to exactly one word, and each word must map to exactly one pattern character.
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const charToWord = {};
  const wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Pattern character already has a different word
    if (charToWord[char] && charToWord[char] !== word) {
      return false;
    }

    // Word already belongs to a different character
    if (wordToChar[word] && wordToChar[word] !== char) {
      return false;
    }

    charToWord[char] = word;
    wordToChar[word] = char;
  }

  return true;
};
// Expected Input: "abba", "dog cat cat dog"
// Expected Output: true
// 03. Find the Difference
// Write a function that finds the extra character added to string t when string s is rearranged and one additional character is added.
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let result = 0;

  // XOR all characters from both strings
  for (const char of s) {
    result ^= char.charCodeAt(0);
  }

  for (const char of t) {
    result ^= char.charCodeAt(0);
  }

  return String.fromCharCode(result);
};
// Expected Input: "abcd", "abcde"
// Expected Output: "e"
// 04. Reverse Linked List
// Write a transformation function that reverses a singly linked list and returns the new head of the reversed list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;

    current.next = previous;

    previous = current;
    current = nextNode;
  }

  return previous;
};

// Helper function: Array -> Linked List
function createLinkedList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;

  for (const value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

// Helper function: Linked List -> Array
function linkedListToArray(head) {
  const result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

// Test
const head = createLinkedList([1, 2, 3, 4, 5]);

const reversedHead = reverseList(head);

// console.log(linkedListToArray(reversedHead));
// Expected Input: [1, 2, 3, 4, 5]
// Expected Output: [5, 4, 3, 2, 1]
// 05. Middle of the Linked List
// Write a function that finds and returns the middle node of a singly linked list. If the list contains two middle nodes, return the second middle node.
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  // Fast moves twice as quickly as slow
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
// console.log(middleNode(createLinkedList([1, 2, 3, 4, 5])));
// Expected Input: [1, 2, 3, 4, 5]
// Expected Output: [3, 4, 5]
// 06. Product of Array Except Self
// Write a function that returns an array where each element is the product of all elements in the input array except the element at the current index. Do not use division.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  // Product of all elements to the left
  let leftProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Product of all elements to the right
  let rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};
// console.log(productExceptSelf([1, 2, 3, 4]));
// Expected Input: [1, 2, 3, 4]
// Expected Output: [24, 12, 8, 6]
// 07. Remove Nth Node From End of List
// Write a function that removes the nth node from the end of a singly linked list and returns the head of the modified list.
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {};
// Expected Input: [1, 2, 3, 4, 5], n = 2
// Expected Output: [1, 2, 3, 5]
// 08. Find First and Last Position of Element in Sorted Array
// Write a function that finds the starting and ending position of a given target value in a sorted array. Return [-1, -1] if the target does not exist.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {};
// Expected Input: [5, 7, 7, 8, 8, 10], target = 8
// Expected Output: [3, 4]

// 09. Permutation in String
// Write a validation function that determines whether one string contains a permutation of another string as a substring.
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {};
// Expected Input: "ab", "eidbaooo"
// Expected Output: true
// 10. Find All Anagrams in a String
// Write a function that finds all starting indices of substrings in s that are anagrams of string p. Return the indices in any order.
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {};

// Expected Input: "cbaebabacd", "abc"
// Expected Output: [0, 6]
