// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

export function squareSum(numbers: number[]): number {
    return numbers.map(number => number ** 2).reduce((a, b) => a + b);
}

// console.log(squareSum([])); // 50
console.log()