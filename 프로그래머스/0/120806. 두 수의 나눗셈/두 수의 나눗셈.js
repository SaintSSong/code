function solution(num1, num2) {
    const g = Math.floor((num1 / num2)*1000)

    return g;
}
// num1 과 num2를 나눈 값을 g라고한다.
// g * 1000 = k 라고 한다.
// 근데 곱한 후에 정수 부분이 있다고 한다. 
// 정수 부분을 뽑는 메서드가 뭐지? 반올림? / 몫만 뽑는 것?
// return k 를 쓰자. 
