/**
 * Problem:
 * Given an array arr[], find and return the largest element.
 *
 * Examples:
 * Input: [1, 8, 7, 56, 90]
 * Output: 90
 *
 * Input: [5, 5, 5, 5]
 * Output: 5
 *
 * Input: [10]
 * Output: 10
 *
 * Constraints:
 * - Array contains at least one number
 * - Numbers can be negative
 */

class Solution {
  /**
   * Common input validation
   */
  static validate(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Invalid input: non-empty array required");
    }
  }

  /**
   * Solution 1: Iterative Loop (Recommended)
   * Time: O(n)
   * Space: O(1)
   */
  static largestUsingLoop(arr) {
    Solution.validate(arr);

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
    return max;
  }

  /**
   * Solution 2: Array.reduce (Functional style)
   * Time: O(n)
   * Space: O(1)
   */
  static largestUsingReduce(arr) {
    Solution.validate(arr);

    return arr.reduce(
      (max, curr) => (curr > max ? curr : max),
      -Infinity
    );
  }

  /**
   * Solution 3: Math.max with spread
   * Time: O(n)
   * Space: O(n) (arguments list)
   * Note: Not safe for very large arrays
   */
  static largestUsingMathMax(arr) {
    Solution.validate(arr);

    return Math.max(...arr);
  }

  /**
   * Solution 4: Sorting
   * Time: O(n log n)
   * Space: O(n)
   * Note: Not optimal, shown for comparison
   */
  static largestUsingSort(arr) {
    Solution.validate(arr);

    return [...arr].sort((a, b) => b - a)[0];
  }

  /**
   * Solution 5: Recursion (Conceptual)
   * Time: O(n)
   * Space: O(n) (call stack)
   */
  static largestUsingRecursion(arr, index = 0, max = -Infinity) {
    Solution.validate(arr);

    if (index === arr.length) return max;

    return Solution.largestUsingRecursion(
      arr,
      index + 1,
      arr[index] > max ? arr[index] : max
    );
  }
}

/* Example usage:
const arr = [1, 8, 7, 56, 90];

console.log(Solution.largestUsingLoop(arr));
console.log(Solution.largestUsingReduce(arr));
console.log(Solution.largestUsingMathMax(arr));
console.log(Solution.largestUsingSort(arr));
console.log(Solution.largestUsingRecursion(arr));
*/
