function solution(absolutes, signs) {
    // 1. 실제 정수들의 합을 저장할 변수
    let sum = 0;

    // 2. absolutes 배열의 각 요소를 검사합니다.
    for (let i = 0; i < absolutes.length; i++) {
        // 3. signs[i]가 true이면 양수, false이면 음수로 변환합니다.
        if (signs[i]) {
            sum += absolutes[i];
        } else {
            sum += -absolutes[i];
        }
    }

    // 4. 실제 정수들의 합을 반환합니다.
    return sum;
}