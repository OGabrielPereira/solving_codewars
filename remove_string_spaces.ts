// Simple, remove the spaces from the string, then return the resultant string.

export function noSpace(x: string) {
    return [...x].filter(x=>x!=" ").join("")
}


console.log(noSpace("Sua mãe é sua"));