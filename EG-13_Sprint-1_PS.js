// 01. Check if a Year is a Leap Year

/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  return year % 4 === 0;
}

console.log(isLeapYear(2024));
// Expected Output: true

// ************************************************************

// 02. Generate Fibonacci Sequence Up to N Terms

/**
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci.slice(0, n);
}

console.log(generateFibonacci(7));
// Expected Output: [0, 1, 1, 2, 3, 5, 8]

// ************************************************************

// 03. Calculate the Greatest Common Divisor (GCD)

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(findGCD(48, 18));
// Expected Output: 6

// ************************************************************

// 04. Calculate the Least Common Multiple (LCM)

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

console.log(findLCM(12, 18));
// Expected Output: 36

// ************************************************************

// 05. Check if a Number is Prime

/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(29));
// Expected Output: true

// ************************************************************

// 06. Merge Two Sorted Arrays into One Sorted Array

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Expected Output: [1, 2, 3, 4, 5, 6]

// ************************************************************

// 07. Find the Median of an Unsorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  const middle = Math.floor(sortedNums.length / 2);

  if (sortedNums.length % 2 === 0) {
    return (sortedNums[middle - 1] + sortedNums[middle]) / 2;
  }

  return sortedNums[middle];
}

console.log(findMedian([7, 1, 3, 4, 9]));
// Expected Output: 4

// ************************************************************

// 08. Find the Second Largest Number in an Array

/**
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(findSecondLargest([10, 20, 4, 45, 99, 99]));
// Expected Output: 45

// ************************************************************

// 09. Find Most Frequent Element (Mode) in an Array

/**
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
  const frequency = new Map();

  let mode = arr[0];
  let maxFrequency = 0;

  for (const element of arr) {
    const count = (frequency.get(element) || 0) + 1;

    frequency.set(element, count);

    if (count > maxFrequency) {
      maxFrequency = count;
      mode = element;
    }
  }

  return mode;
}

console.log(findMode([1, 3, 3, 2, 1, 3, 4]));
// Expected Output: 3

// ************************************************************

// 10. Natural Sorting of Strings with Embedded Numbers

/**
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr) {
  return [...arr].sort((a, b) => {
    const partsA = a.match(/(\d+|\D+)/g);
    const partsB = b.match(/(\d+|\D+)/g);

    const length = Math.min(partsA.length, partsB.length);

    for (let i = 0; i < length; i++) {
      const partA = partsA[i];
      const partB = partsB[i];

      const numA = Number(partA);
      const numB = Number(partB);

      if (!isNaN(numA) && !isNaN(numB)) {
        if (numA !== numB) {
          return numA - numB;
        }
      } else if (partA !== partB) {
        return partA.localeCompare(partB);
      }
    }

    return partsA.length - partsB.length;
  });
}

console.log(naturalSort(["file10.txt", "file2.txt", "file1.txt"]));
// Expected Output: ["file1.txt", "file2.txt", "file10.txt"]
