function solution(order) {
    var answer = 0;
    let stingOrder = order.toString();
    console.log(stingOrder)
    let splitNumber = stingOrder.split("")
    let s = splitNumber.length;
    
    console.log("splitNumber",splitNumber, s)

    let count = 0;
    
    for(let i = 0; i < s; i++){
        if(splitNumber[i] === "3" || splitNumber[i] === "6" || splitNumber[i] === "9"){
            count ++
        }
    }
    
    console.log(count)
    return count;
}

// 카운팅 하자
// n의 숫자를 자르고 순회를 해서 특정 값이 있을 경우 count ++ 하자.
