/**
 * Simple complexity
 * Effective, easy to understand
 * @param n 
 * @returns 
 */
function sumUseCase1(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
/**
 * Need to have knowledge of recursion
 * Complexity depends on input parameters
 * @param n 
 * @returns 
 */
function sumUseCase2(n: number): number {
    let total = 0;
    if (n <= 1) {
        return n;
    }
    total = n + sumUseCase2(n - 1);
    return total;
}
/**
 * Easy to understand
 * Maximum efficiency
 * @param n 
 * @returns 
 */
function sumUseCase3(n: number): number {
    let total = (n * (n + 1)) / 2;
    return total;
}
// console.log("sumUseCase1 :",sumUseCase1(5));
// console.log("sumUseCase2 :",sumUseCase2(5));
// console.log("sumUseCase3 :",sumUseCase3(5));