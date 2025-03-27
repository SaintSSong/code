function solution(numbers, direction) {

    if(direction === "left"){
        // 0번째 인덱스를 뺀 나머지를 반환
    let a = numbers.slice(1) // 	[ 455, 6, 4, -1, 45, 6 ]
    console.log("a",a)
        // 0번째 인덱스를 추출
    let b = numbers.slice(0,1)
        console.log("b",b)
    let c = a.concat(b)
    return c
        
    } else if(direction === "right") {
        
    let d = numbers.slice(-1)
    
    let e = numbers.slice(0,numbers.length-1)
    let f = d.concat(e)
    return f
    }
}

// 자르고 붙일까?
// 자르고? slice
// 붙일까? join? join은 문자열만 아닌가? 
// concat()
// 배열을 반환해야하네?

