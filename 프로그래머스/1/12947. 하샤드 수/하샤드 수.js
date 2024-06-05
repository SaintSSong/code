function solution(x) {
    // 1. 숫자를 문자열로 변환하여 각 자릿수를 분리합니다.
    let str = x.toString();
    
    // 2. 각 자릿수를 더합니다.
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    
    // 3. 원래 숫자를 자릿수의 합으로 나누어 떨어지는지 확인합니다.
    if (x % sum === 0) {
        return true;  // 나누어 떨어지면 하샤드 수입니다.
    } else {
        return false; // 나누어 떨어지지 않으면 하샤드 수가 아닙니다.
    }
}