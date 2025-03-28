function solution(my_string) {
    var answer = '';
    
    let a = my_string.split("");
    let b = [];

    for (let i=0; i < a.length; i++){
        if(b.includes(a[i]) === true) {
            
        } else{
            b.push(a[i])
        }

    }
    console.log("b", b)
    let c = b.join("")
    console.log("c", c)
    return c;
}

// includes 활용?

// 먼저 매개변수를 쪼갠다. 배열이 나오겠지?
// 배열의 요소를 for로 순회한다.
// if문을 활용해서 answer.includes === true 그러면 끝 else? 넣는다. 