/**
 * Description: Given an array `arr` of size `n` and an integer `X`. Find if there's a triplet in the array which sums up to the given interger `X`.
 * @example 1:
 *  Input:
 *   n = 6, X = 13
 *   arr[] = [1, 4, 45, 6, 10, 8]
 *  Output:
 *   1
 *  Explanation:
 *   The triplet {1, 4, 8} in the array sums up to 13.
 */

function find3Numbers(arr: number[], n: number, x: number): number {
  const sortedArr: number[] = arr.sort();

  for (let i = 0; i < n; i++) {
    let sum = x - sortedArr[i];
    let start = i + 1;
    let end = n - 1;

    while (start < end) {
      if (sortedArr[start] + sortedArr[end] > sum) {
        end--;
      } else if (sortedArr[start] + sortedArr[end] < sum) {
        start++;
      } else if (sortedArr[start] + sortedArr[end] === sum) {
        return 1;
      }
    }
  }

  return 0;
}
