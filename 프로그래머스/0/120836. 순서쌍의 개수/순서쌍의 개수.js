function solution(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++){
        if(n % i === 0){
           count ++
        }
    }

    return count;
}

// 약수를 구하는거 같은데?? // 약수 구하는 방법이 따로 있나?
// for문을 돌려서 1 ~ n까지 곱했을 때  n이 나오는 수 while도 되겠고

    // 2중 for문??
