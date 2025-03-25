function solution(rsp) {

    
// 1. 숫자를 문자로 바꾼다.
    let stringRsp = rsp.toString()
    console.log("stringRsp", stringRsp)   
// 2. 쪼갠다. split
    let splitRsp = stringRsp.split('')
    console.log("splitRsp", splitRsp)   

    // map함수 안에서도 if - else if문을 쓸 수 있다.
    // 배열로 전체 순회를 돈다.
    let a = splitRsp.map((v) => 
        {if(v === "2"){
        return "0"}
    else if(v === "0"){
        return "5"}
    else if(v === "5"){
        return "2"
    }})
    
    console.log("a",a)

    let answer = a.join("");
    return answer;
}

// 지문 문자열을 나타내라.
// 205 -> 052로 된다.
// 1. 숫자를 문자로 바꾼다.
// 2. 쪼갠다. split
// 3. for문을 쓴다.
// 4. 합친다. join 