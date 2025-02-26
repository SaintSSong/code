function solution(array) {

    let count = {} // 최빈값 구하기 위해 담을 객체
    
    // 배열의 요소 빈도수를 구하기
    for (let banana of array) {
        count[banana] = (count[banana] || 0) + 1
    }
    console.log("count", count)
    
    // 최빈값 구하기
    // 우선 최빈값을 하나 임의로 정하고 그걸 업데이트하는 방식으로 가야겠다.
    let maxNumber = -1; // 최빈값을 -1이라고 임의 지정
    let maxCount = 0; // 최대 빈도수를 우선 0이라고 지정
    let isMultyple = false; 
    
    for (let key in count) {
        let value = count[key]; // 각 객체 속 빈도수 값을 value에 저장
        let numberKey = Number(key); // 객체 속 key를 숫자로 변환
        
        // 만약 객체 속의 빈도수가 최대 빈도수보다 크다? 
        // 그러면 업데이트를 해야한다.
        if (value > maxCount) {
            maxCount = value;
            maxNumber = numberKey;
            isMultyple = false;
        } else if(value === maxCount) {
            isMultyple = true;
        }
    }
    
    return isMultyple ? -1 : maxNumber;
}

// 배열을 매개 변수로 받았다.
// 이 배열을 하나하나 돌면서 요소들이 몇번 나왔는지 배열의 요소의 빈도수을 구해야겠다.

// 배열을 하나하나 돌면 for문이겠고 그 중에서 for of를 써야겠네

// 최빈값 구하는 방법이 어떻게 될까?
// 우선 최빈값을 하나 임의로 정하고 그걸 업데이트하는 방식으로 가야겠다.
// 현재 객체에 있는 요소들이 몇번 나왔는지 횟수도 계산해야지 비교가 가능하겠다.



