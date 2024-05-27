function solution(n) {
    var sum = 0;  // 약수의 합을 저장할 변수

    for (var i = 1; i <= n; i++) {  // 1부터 n까지 반복
        if (n % i === 0) {  // n을 i로 나누었을 때 나머지가 0이면
            sum += i;  // i는 n의 약수이므로 sum에 더해
        }
    }

    return sum;  // 약수들의 합을 반환
}