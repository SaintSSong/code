function solution(x, n) {
    // 결과를 저장할 배열을 초기화합니다.
    let result = [];
    
    // 1부터 n까지 반복합니다.
    for (let i = 1; i <= n; i++) {
        // x에 i를 곱한 값을 배열에 추가합니다.
        result.push(x * i);
    }
    
    // 최종 결과 배열을 반환합니다.
    return result;
}

// 테스트 예제
console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
console.log(solution(4, 3)); // [4, 8, 12]
console.log(solution(-4, 2)); // [-4, -8]