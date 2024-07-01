function solution(n) {
let a = 0;                 // i가 피자 조각 개수
    for (let i = 0; n < i <= 100; i++) {  // 왜냐하면 모든 사람이 한조각씩 먹어야하는데 n명에 다가갈 수록
        if(i % n !== 0) {
            a++;
        }
    }
    return a;
}
  //  8 % 7 

