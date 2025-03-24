function solution(numbers, num1, num2) {
    let a = numbers;
    let answer = a.slice(num1, num2 + 1);
    console.log("num1", num1, "/ num2", num2);
    console.log(answer)
    return answer;
}

// 배열을 자르는 메서드가 있나?
// for문을 돌리면 2중으로 돌려야하지 않을까?

// slice? 메서드? 사용법은?
// arr.slice("시작점", "끝점")