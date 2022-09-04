export function even_or_odd(n: number): string {
    return n % 2 == 0 ? "even" : "odd"
}
console.log(even_or_odd(1)) // even