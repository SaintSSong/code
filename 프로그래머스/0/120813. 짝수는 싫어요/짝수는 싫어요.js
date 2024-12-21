function solution(n) {
    var answer = [];
    
    for( let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            console.log("짝수입니다.")
        } else {
            console.log("홀수입니다.")
            answer.push(i)
        }
    }
    return answer;
}