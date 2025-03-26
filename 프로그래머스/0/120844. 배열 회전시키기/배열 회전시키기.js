function solution(numbers, direction) {
    var answer = [];

    
    if(direction === "right"){
        // 
        let a = numbers.slice(-1); //(2, 3)
        console.log(a) // 3
        let b = numbers.slice(0, numbers.length-1); //(0, 2)
        console.log(b) // 1,2
        
        let c = a.concat(b)
        return c
        } else {
            // 가장 왼쪽을 빼야함.
        let d = numbers.slice(0, 1); 
        console.log("d",d) 
            // 2번째 요소부터 끝요소까지 
        let e = numbers.slice(1, numbers.length);
        console.log("e",e) // 1,2
        
        let f = e.concat(d)
        return f
        }
    
    // 원본 배열의 요소의 index에서 한칸씩 밀리게 해야 한다.
    
    return answer;
}

// slice() 다시 공부하기
// concat() 공부하기 