function solution(sides) {
    let a = sides;
    // 최댓값
    let maxNumber = 0;
    // 나머지 값들의 핪
    let restSum = 0;
    
    for(let i = 0; i < a.length; i++){
        if(a[i] > maxNumber) {
            maxNumber = a[i] 
        } 
        restSum += a[i] 
    }
    
    let b = restSum - maxNumber
    
    if(maxNumber >= b) {
        return 2
    } else {
        return 1
    }
}




// 가장 긴 변의 길이가 나머지 두개의 합보다 작아야한다? 

// 배열을 순회해서 각 요소를 보고 제일 큰 값을 갱신하고 그 다음에 비교해야할거 같은데? 

// 이때 가장 큰 값이 나머지 합보다 작으면 1 아니면 2 

    
// 또 다른 풀이 방법이 하드 코딩으로 가면 그냥 정렬해서 맨 뒷 놈의 값이 해서 return하면 끝인데;
