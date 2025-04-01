function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= n; i++){
        if( n % i === 0) {
            answer.push(i)
        }
    }
    console.log("answer", answer)
    return answer.sort((a,z) => a-z);
}

// for문을 써서 1부터 해서 %가 0인 값을 싹다 모으자.