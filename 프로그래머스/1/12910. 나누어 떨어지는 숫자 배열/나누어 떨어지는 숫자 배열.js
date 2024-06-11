function solution(arr, divisor) {
    // 1. 나누어 떨어지는 요소들을 필터링하여 새로운 배열을 만듭니다.
    let result = arr.filter(value => value % divisor === 0);

    // 2. 나누어 떨어지는 요소가 하나도 없다면 -1을 반환합니다.
    if (result.length === 0) {
        return [-1];
    }

    // 3. 나누어 떨어지는 요소들을 오름차순으로 정렬합니다.
    result.sort((a, b) => a - b);

    // 4. 정렬된 결과를 반환합니다.
    return result;
}