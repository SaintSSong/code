function solution(s1, s2) {
    var answer = 0;
    let count = 0;
    
    for (let i = 0; i < s1.length; i++){
        
        for(let j = 0; j<s2.length; j++){
            if(s1[i] === s2[j]){
                console.log("i",i, "j",j)
                count ++
            }
        }
    }
    
    return count;
}

// for문 속의 for문을 넣어서 if (i === j) 면 count ++ 이렇게 풀어야하나?

