function solution(num_list) {
    let evenCount = 0;  // 짝수 개수를 세는 변수
    let oddCount = 0;   // 홀수 개수를 세는 변수

    // 리스트의 각 원소를 순회합니다.
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenCount++;  // 짝수이면 evenCount 증가
        } else {
            oddCount++;   // 홀수이면 oddCount 증가
        }
    }

    // 결과를 배열로 반환합니다.
    return [evenCount, oddCount];
}