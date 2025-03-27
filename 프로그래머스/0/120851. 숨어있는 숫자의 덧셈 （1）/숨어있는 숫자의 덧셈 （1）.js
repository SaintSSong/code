function solution(my_string) {
    
    let sum = 0;
    
    let a = my_string.split('');
    // console.log("a",a) // 문자열 배열로 반환 확인
    
    for(let i = 0; i <= a.length; i++){
        
        // 배열의 요소를 숫자로 변환 시키고 그걸 변수에 넣기
        let Num = Number(a[i]);
        
        // 변수가 숫자가 맞는지 확인하고 맞다면 누적합 넣기
        if(Number.isFinite(Num)) {
            sum += Num
        }
    }
    
    return sum;
}

// Number.isFinite() 함수를 쓰겠고
// for문을 써서 += 함수를 써서 누적 합을 만들면 되겠고