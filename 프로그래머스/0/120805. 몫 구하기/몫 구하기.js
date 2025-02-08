function solution(num1, num2) {
    const answer =  parseInt(num1 / num2);
    return answer;
}
// 맨처음 num1 / num2로 했을 때 2번 예시가 3.5로 3이 아니여서 틀렸다.
// 그러면 반올림 함수를 사용해서 정수만 나오게 하자.
// Math.floor / parseInt 둘 다 사용 가능