function solution(my_string) {
    let a = my_string.split(" ")
    
    let b = Number(a[0])
    
    for (let i =1; i < a.length; i += 2){
        const op = a[i];
        const nextNumber = Number(a[i+1])
        
        if(op === "+"){
            b += nextNumber
        } else if(op === "-"){
            b -= nextNumber
        }
    }
    return b
}

// ... 을 통해서 찾아볼까? 
// 문자열 속에 if문을 써서 +가 들어 있으면 더할까? 이건 for of를 써도 되겠다.
