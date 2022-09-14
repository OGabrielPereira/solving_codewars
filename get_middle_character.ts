export function getMiddle(s: string) { 
    return [...s].length % 2 == 0 ? [...s][([...s].length / 2) - 1] + [...s][[...s].length / 2] : [...s][Math.floor([...s].length / 2)]
}


console.log(getMiddle("Gabriel")) // r
console.log(getMiddle("João")) // oã