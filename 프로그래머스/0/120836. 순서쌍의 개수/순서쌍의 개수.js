function solution(n) {
let pairs = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            pairs.push([i, n / i]);
        }
    }
    let b = pairs.length
    return b;
}