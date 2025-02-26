function solution(numbers) {

    let count = 0;
    
    for(let num of numbers) {
        count += num;
        console.log("count", count)
    }
    
    let answer = count / numbers.length; 
    
    return answer;
}

// 배열이 주어졌다.
// 원소의 평균 값을 더하라고 하네?
// 배열의 원소를 다 찍어봐야하네? 그러면 뭐가 있지? for of  
// 그 후에 / 원소의 숫자만큼 해야하네 = 배열의 길이. array.length
