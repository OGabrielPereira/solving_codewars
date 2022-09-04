// Return the number(count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata(but not y).
// The input string will only consist of lower case letters and / or spaces.

export class Kata {
    static getCount(str: string) {
        let len: number;
        return len = [...str].filter(x => x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ).length
    }
}

console.log(Kata.getCount("abracadabra"))


// export class Kata {
//     static getCount(str: string) {
//         let list = str.match(/[aeiou]/gi);
//         return list ? list.length : 0;
//     }
// }

// export class Kata {
//     static getCount(str: string) {
//         return [...str].filter(char => 'aeiou'.includes(char)).length;
//     }
// }

// export class Kata {
//     static getCount(str: string) {
//         return str.replace(/[^aeiou]/gi, '').length
//     }
// }