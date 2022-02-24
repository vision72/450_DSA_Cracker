import * as readline from "readline";

/**
 * Description: Given an array `A` of size `N`, print the reverse of it.
 * @example 1:
 *  Input:
 *   1
 *   4
 *   1 2 3 4
 *  Output:
 *   4 3 2 1
 */

function reverseArray(arr: number[]): number[] {
  console.log(arr);
  return [];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (ans) => {
  console.log(ans);
  rl.close();
});
