function solution(n) {
    let answer = 0;

    // n까지의 숫자를 순회
    for(let i = 1; i <= n; i++){
        // 카운트를 전역 변수가 아닌 안으로 넣은 이유는 매번 카운트를 초기화 해야하니까
        let count = 0;
        
        // 각 순번이 온 숫자에서 약수를 찾을 것이다. 
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                count ++
            }
        }
        
        if(count >= 3){
            answer++
        }
    }
    return answer;
}

// 합성수를 만드는 방법을 생각해보자.

// 우선 n까지의 숫자를 모두 순회를 할 것이다.
// 각 순번이 온 숫자에서 약수를 찾을 것이다. 
// 그리고 그 순번의 약수의 갯수가 3 이상이면 count를 늘린다.