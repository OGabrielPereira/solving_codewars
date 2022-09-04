// Count the number of Duplicates

// Write a function that will return the count of distinct case 
// -insensitive alphabetic characters and numeric digits that occur 
// more than once in the input string.The input string can be assumed 
// to contain only alphabets(both uppercase and lowercase) and numeric digits.


function duplicateCount(text: string): number {
    let count = 0;
    let arr = text.toLowerCase().split('');
    let set = new Set(arr);
    for (let i of set) {
        if (arr.filter(x => x === i).length > 1) {
            count++;
        }
    }
    return count;
}

console.log(duplicateCount("aAbbcde")); // 0