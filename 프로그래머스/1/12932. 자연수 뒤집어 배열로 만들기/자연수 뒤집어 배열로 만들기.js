function solution(n) {
    // n을 문자열로 변환한 뒤, 각 문자를 숫자로 변환하여 배열에 저장
    const array = n.toString().split('').map(Number);
    // 배열을 뒤집음
    const reversedArray = array.reverse();
    console.log(reversedArray);
    return reversedArray;
}