// 01. Remove Duplicates from Sorted Array
// Write a transformation function that removes duplicate values from a sorted array in-place. Return the number of unique elements remaining in the array.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length === 0) return 0;

  let uniqueIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
    }
  }

  return uniqueIndex;
};

// console.log(checkSubarraySum([1, 1, 2]));

// Expected Input: [1, 1, 2]
// Expected Output: 2
// 02. Binary Search
// Write a search function that finds the index of a target value in a sorted array using binary search. Return -1 if the target does not exist.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // your code goes here
};

// Expected Input: [-1, 0, 3, 5, 9, 12], target = 9
// Expected Output: 4
// 03. Search Insert Position
// Write a function that finds the index where a target value should be inserted in a sorted array while maintaining the sorted order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // your code goes here
};

// Expected Input: [1, 3, 5, 6], target = 5
// Expected Output: 2
// 04. Maximum Depth of Binary Tree
// Write a function that calculates the maximum depth of a binary tree. The depth is the number of nodes along the longest path from the root node to a leaf node.
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // your code goes here
};

// Expected Input: [3, 9, 20, null, null, 15, 7]
// Expected Output: 3
// 05. Invert Binary Tree
// Write a transformation function that inverts a binary tree by swapping the left and right children of every node.
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // your code goes here
};

// Expected Input: [4, 2, 7, 1, 3, 6, 9]
// Expected Output: [4, 7, 2, 9, 6, 3, 1]
// 06. Product of Array Except Self
// Write a function that returns an array where each element contains the product of every number in the input array except the number at that index. Do not use division.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // your code goes here
};

// Expected Input: [1, 2, 3, 4]
// Expected Output: [24, 12, 8, 6]
// 07. Rotate Array
// Write a transformation function that rotates the elements of an array to the right by k positions.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function (nums, k) {
  // your code goes here
};

// Expected Input: [1, 2, 3, 4, 5, 6, 7], k = 3
// Expected Output: [5, 6, 7, 1, 2, 3, 4]
// 08. Min Stack
// Design a stack data structure that supports pushing, popping, retrieving the top element, and retrieving the minimum element in constant time.
/**
 * @return {void}
 */
var MinStack = function () {
  // your code goes here
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // your code goes here
};

// Expected Input: ["push(-2)", "push(0)", "push(-3)", "getMin()", "pop()", "getMin()"]
// Expected Output: [-3, -2]
// 09. Continuous Subarray Sum
// Write a function that determines whether an array contains a continuous subarray of at least two elements whose sum is a multiple of k.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // your code goes here
};

// Expected Input: [23, 2, 4, 6, 7], k = 6
// Expected Output: true
// 10. Daily Temperatures
// Write a function that determines how many days you must wait after each day to get a warmer temperature. If there is no future warmer day, return 0.
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // your code goes here
};

// Expected Input: [73, 74, 75, 71, 69, 72, 76, 73]
// Expected Output: [1, 1, 4, 2, 1, 1, 0, 0]
