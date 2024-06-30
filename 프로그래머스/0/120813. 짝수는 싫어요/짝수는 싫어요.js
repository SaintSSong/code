function solution(n) {
    let result = []; // 결과를 저장할 배열
    
    // 1부터 n까지의 숫자를 순회합니다.
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { // 숫자가 홀수인지 확인합니다.
            result.push(i); // 홀수라면 결과 배열에 추가합니다.
        }
    }
    
    return result; // 결과 배열을 반환합니다.
}