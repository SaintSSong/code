function solution(n, k) {
    let l = n * 12000;
    let d = k * 2000;
    
    let x = Math.floor(n/10) * 2000
    console.log("x = ", x);
    console.log("l + d = ", l, "+", d);
    var answer = l + d - x;
    return answer;
}

// 10인분을 먹으면 음료수를 1개 서비스로 준다. 

// if문을 써서 n이 10으로 나눴을때 나머지가 Math.floor로 딱 나눠서 그걸 * 2000 해서 그걸 또 빼