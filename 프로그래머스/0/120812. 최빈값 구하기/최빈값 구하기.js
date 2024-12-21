function solution(array) {

    let count = {} // 애들 몇번 나왔는지 횟수 새는 객체
    let maxCount = 0 // 가장 많이 나온 값
    let mostNumber = null; // 최빈값 저장 변수
    let multiple = false; 

    array.forEach((num) => {
        count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
        maxCount = count[num]; // 가장 많이 나온 값
        mostNumber = num; 
        multiple = false; 
    } else if (count[num] === maxCount) { 
        multiple = true;
    }

})
    return multiple ? -1 : mostNumber;}

// 주어진 숫자 중에서 가장 많이 나온 숫자? = 숫자당 몇번 나왔는지 횟수를 새야한다.
// 배열을 매개변수로 주네? map이랑 그런거 사용가능하겠다.
// 최빈값이 여러개면 -1을 하라고? 그러면 최빈값이라는 변수가 있어야겠고 그게 여러개인지 알아야겠네?

//   let frequency = {}; // 숫자 등장 횟수를 저장할 공간
//   let maxFrequency = 0; // 가장 많이 나온 횟수
//   let mode = null;      // 최빈값을 저장할 변수
//   let isMultiple = true; // 최빈값이 여러 개인지 확인하는 변수

//   // 1️⃣ 각 숫자의 등장 횟수를 세기
//   array.forEach((num) => {
//     frequency[num] = (frequency[num] || 0) + 1; // 없으면 0부터 시작해서 1씩 더하기
      
    // if (frequency[num] > maxFrequency) {
    //   maxFrequency = frequency[num]; // 최대 등장 횟수 갱신
    //   mode = num;        // 최빈값 저장
    //   isMultiple = false; // 새로운 최빈값이니까 겹치는 게 아니야
    // } 
      // else if (frequency[num] === maxFrequency) {
      // isMultiple = true; // 등장 횟수가 같은 숫자가 나오면 여러 개임
//     } else if (frequency[num]  < maxFrequency) {
//     }
//   });

//   // 2️⃣ 결과 반환
//   return isMultiple ? -1 : mode;