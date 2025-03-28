function solution(s) {
    var answer = 0;
    let a = s.split(" ")
    
    // 얘가 밖에 있어야하는 이유 for문을 돌릴 때마다 초기화 되면 안되니까
    let e = 0;

    for(let i=0; i < a.length; i++){

        
        if( a[i] === "Z") {
            console.log("e1", e)
            // 만약 i가 Z면 i의 직전 수를 뺀다.
            answer -= e
        } else {
            // Z가 아니라면 i값을 더한다. 
            e = Number(a[i])
            console.log("e2", e)
            answer += e
        }
    }
    console.log("answer",answer)
    
    return answer;
}

// 먼저 공백을 빼고 문자열을 만들어야겠어 split(" ")을 쓰자

// for문으로 배열을 순회해야겠는데? 

// 우선 전역 변수에 변수 하나(answer)를 선언해서 거기다가 숫자를 더 하자.

// if else 문을 써써 i === "z" 일때 무엇인가를 해서 직전 수를 빼야해

// answer -= i -1 ????