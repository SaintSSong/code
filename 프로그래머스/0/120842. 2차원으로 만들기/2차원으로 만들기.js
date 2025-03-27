function solution(num_list, n) {
    var answer = [];
    
    for(let i = 0; i < num_list.length; i += n){
        let a = num_list.slice(i, i + n);
        console.log("a", a)
        answer.push(a);
    }
    
    return answer;
}

// 매개변수로 배열이 주어진다.

// 새로운 배열을 제공해야한다.
// 배열을 자르는 메서드 slice