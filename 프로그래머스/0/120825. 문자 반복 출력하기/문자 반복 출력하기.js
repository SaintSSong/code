function solution(my_string, n) {
    var answer = '';
    let b = my_string
    
    for(let i = 0; i < b.length ; i++ ) {
        answer += b[i].repeat(n)
    }
    
    return answer;
}