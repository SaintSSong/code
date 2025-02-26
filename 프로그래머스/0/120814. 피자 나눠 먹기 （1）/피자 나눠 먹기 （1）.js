function solution(n) {


    let a = Math.ceil(n / 7)

    return a;
}

// 피자는 7조각이다.
// 사람수는 n명이다.
// 모든 사람에게 한조각 이상 씩 가야한다. = n / 7은 1 이상이다.
// n이 8명이 되는 순간 2판 이상이 필요하다.
// 