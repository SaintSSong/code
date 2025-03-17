function solution(money) {
    let m = money;
    let coffee = 5500;
    var answer = [];
    
    // 잔수
    let cup = Math.floor(m / coffee)
    console.log("cup", cup)

    answer[0] = cup
    console.log("answer[0]", answer[0] )
    
    // 잔돈 
    let other = m - (5500 * cup)
    console.log("other", other )
    
    answer[1] = other
    
    return answer;
}

// 배열이다. 배열의 순서가 잔수, 남는 돈 순서대로 담아야하네? 그러면 arr[0] 이런 식으로 넣지 않을까?
// 내가 배웠었던 반올림 함수가 뭐였지? (Math.ceil) 근데 그냥 Math.floor로 잔수를 넣어야겠다.
// 남는 돈은 어떻게 계산하지? money - 5,500원 넣어야겠다.