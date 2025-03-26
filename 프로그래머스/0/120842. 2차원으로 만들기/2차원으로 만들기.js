function solution(num_list, n) {
    var answer = [];
    
    // i가 0부터 num_list의 길이까지 
    for(let i =0; i <= num_list.length -1; i += n) {
        answer.push(num_list.slice(i, i + n))
    }
    
    return answer;
}

// ??? 이거 혹시 split으로 쪼개고 join으로 합치는 건가?

// 배열을 특정 요건에 맞게 자르는 메서드가 있나? 
// slice?? ???

// 내가 모르는 것 
// 1. slice활용법
// 2. push() 활용법 / push 속에 다른 함수를 통해서도 쓸 수 있다는 것(num_list.slice(i, i + n))
// 3. 증감/ 감소 연산자 해석 i += n 같은..