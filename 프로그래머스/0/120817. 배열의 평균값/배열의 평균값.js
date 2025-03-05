function solution(numbers) {
    // 평균값을 다 더 할 변수를 선언 
    let count = 0;
    
    // 배열의 요소를 더하기
    for(let num of numbers) {
        count += num;
    }
    
    // 다 더한 변수에 배열의 길이만큼 나누기
    const a = count / numbers.length
    return a;
}