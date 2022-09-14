// Build a function that returns an array of integers from n to 1 where n > 0.
// Example: n = 5 -- > [5, 4, 3, 2, 1]

export const reverseSeq = (n: number): number[] => {
    let vec: number[] = [];
    for (let i = 0; n>i; n--){vec.push(n)}
    return vec 
};

console.log(reverseSeq(2)) // [5, 4, 3, 2, 1]