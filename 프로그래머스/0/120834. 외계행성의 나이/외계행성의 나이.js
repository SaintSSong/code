function solution(age) {
    // 매개변수 숫자를 나누기 위해서 문자로 변환
    let ae = age.toString();
    console.log("ae", ae)   
    // 문자로 변환 된 매개변수를 나누기
    let ag = ae.split('');
    console.log("ag", ag)
    
    // 나누어진 매개변수 문자 배열을 숫자로 치환
    // numStr = ["2", "3"]
    let answer = ag.map((numStr) => {
        
        // 각 요소의 문자를 숫자로 변환
        let num = Number(numStr); // "2" → 2
        
        // 아스키 코드 fromCharCode()
        let letter = String.fromCharCode(97 + num); // 97 + 2 = 99 → "c"
        
            console.log("letter", letter)
    return letter;
    })
                console.log("answer", answer)
    

    
    return answer.join('');
}

// 특정 문자를 내가 지정한 문자로 바꿀 수 있나?
// replace?

//==================================================
// 내가 몰랐던 점
// 1. 우선 23이란 숫자는 붙어 있으니까 따로 띠어야 겠네 split('')
// 2. split('') 메서드는 "문자열"에서만 사용 가능 
// 3. 따라서 숫자열을 문자로 변경해줘야한다. toString()
// 4. map을 사용해야하는 필요성을 못 느낀 것!
// 5. 이거 아스키 코드를 알아야 풀 수 있는 문제라고 한다..