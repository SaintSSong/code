function solution(array) {
    // sort를 써서 정렬하자
    var a = array.sort((a,b) => a - b)
    
    console.log("a",a)
    
    // 배열의 중앙에 있는 요소의 위치를 구하자.
    var b = Math.floor(a.length/2)
        
    console.log("b",b)
    
    var c = a[b]
    console.log("c",c)
    return c;
}

// 중앙값을 return하네? 그러면 
// 정수의 배열이 주어지네? 
// 배열을 일단 정렬해야겠네? 
// 그러면 뭘 써야하지? sort네?
// 이때 중앙을 어떻게 구하지? 배열의 중앙에 있는 요소의 자리를 가져오면 되겠다.


// 내 실패점 정렬까지는 알겠다.
// 배열의 중앙에 있는 요소의 자리를 가져오면 되겠다. 이걸 생각 못했음.
// 했다하더라도 배열속에서 자리 위치를 어떻게 가져올지 생각 못했음.
