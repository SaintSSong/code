function solution(n) {
    var answer = 1;
    
 for(let i = 1; ; i++){
  answer *= i;
        
  if(answer > n){
   return i -1;
  }
 }
}

// 내가 몰랐던 것 
// 1. 팩토리얼을 구현하는 방식(누적 곱) *= 을 i++를 통해서 구현
// 2. 누적 곱의 크기를 비교 할 줄 알아야 한다.


// for i++ 로해서 i <= 10 i++
// n 이하의 숫자가 정답이 되게 n을 늘린다?? 