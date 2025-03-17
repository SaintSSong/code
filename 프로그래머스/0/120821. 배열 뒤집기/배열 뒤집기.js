function solution(num_list) {
    
    var answer = num_list;
    
    console.log("answer", answer)
    
    let reverseAnswer = answer.reverse()
    
    console.log("reverseAnswer", reverseAnswer)
    
    return answer;
}

// 정렬을 시키면 안된다.
// 그냥 배열을 뒤집으면 된다.  그런 메서드가 있나? 있다. reverse