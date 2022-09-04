
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.The string can contain any char.

// Examples input / output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export function xo(str: string) {
    let x = [...str.toLowerCase()].filter(x => x === "x").length
    let o = [...str.toLowerCase()].filter(x => x === "o").length
    if(x === o){
        return true
    } else if (x === 0 && o === 0){
        return true
    } else return false
}

console.log(xo("xxoo")) // true