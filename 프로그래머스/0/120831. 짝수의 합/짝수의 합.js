function solution(n) {
    var answer = 0;
    let x = 0;
    
    console.log(n)
    for (let i = 0; i <= n; i++){
        if(i % 2 ===0) {
            x += i
        } 
    }
    
    return x;
}

// n 이하의 짝수를 모두 더 한 값?
// if문을 써서 let i = 0; 부터 해서 n까지 짝수를 구하고 그걸 다 +=해야겠네