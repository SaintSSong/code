function solution(angle) {
    let n = angle;
    console.log(n);
    
    if( n > 0 && n < 90) {
        return 1;
    } else if( n === 90) {
        return 2;       
    } else if( n > 90 && n < 180) {
        return 3;
    } else if( n === 180) {
        return 4;
    } 
}

// 예각을 조건으로 만들어볼까? 