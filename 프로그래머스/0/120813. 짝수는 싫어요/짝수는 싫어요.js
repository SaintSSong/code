function solution(n) {
    var a = [];
    
    for(i=0; i <= n; i++){
        if(i % 2 !== 0) {
            a.push(i)
        }
    }
    
    return a;
}

// 배열을 return하네?
// 홀수를 만드는 조건이 어떻게 될까?
// k % 2 했는데 나머지가 나오면 홀수잖아.
// 우선 정수 n보다 못한 숫자면 0부터 n까지 쭉 봐야하고 
// 홀수가 나오면 그 숫자는 array.push해서 그걸 return해야겠다.

