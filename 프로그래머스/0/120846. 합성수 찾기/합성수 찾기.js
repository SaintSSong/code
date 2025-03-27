function solution(n) {
    let answer = 0;

    // 1부터 n까지 모든 수를 하나씩 검사해볼 거야
    for (let i = 1; i <= n; i++) {
        let count = 0; // 약수 개수를 셀 변수

        // 해당 숫자 i의 약수를 구해보자
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++; // 나누어 떨어지면 약수니까 count 증가
            }
        }

        // 약수의 개수가 3개 이상이면 합성수야
        if (count >= 3) {
            answer++; // 합성수 개수 증가
        }
    }

    return answer;
}
