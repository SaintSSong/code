function solution(n) {
    for (let i = 1; ; i++){
        if((i * 6) % n === 0) {
            return i
        }
    }
}

// 피자 나눠 먹는 사람 수 n 
// 기본 6조각 
// (i * 6) % n === 0 