export function getSum(a: number, b: number): number {
    if (a===b) {
        return a;
    } else if (a>b){
        while(b<a) {
            let c = a+b
            b++
        }
    } else if (b>a) {
        while (a<b) {
            let c = a + b
            a++
            return c
        }
    }
}

console.log(getSum(-1, 2));