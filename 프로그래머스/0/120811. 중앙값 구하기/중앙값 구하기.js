function solution(array) {
    const a = array
    
    const b = a.sort((a,b) => a - b)
    
    const c = Math.floor(b.length / 2)
    
    const d = b[c]
    
    return d
}


// 중앙값? 정렬했을 떄? sort 쓰겠다.
// 배열이 매개변수로 주어졌네? 그러면 그 배열을 정렬하고 그중에서 가장 가운데 인수를 뽑으면 되겠다
// 그건 어떻게? 배열의 길이 / 2 
// 근데 5개면 2.5인데 그걸 반올림 어떻게? 나눌때 반올림 해서 나눠주는 녀석을 쓰자.