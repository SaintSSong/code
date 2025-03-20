function solution(my_string, letter) {

    // 1. 문자를 쪼개자
    let a = my_string.split("")

    // 2. 특정 문자열을 제외하자.
    let b = a.filter(w => w !== letter);
    
    // 3. 제외된 문자를 뺀 나머지를 합치자.
    let c = b.join("");
    
    console.log("letter =", letter)
    console.log("b = ", b)
    console.log("c = ", c)
    
    return c;
}

// 특정 문자를 찾는 메서드가 있을까?
// 없다면 for문을 돌려서 모든 문자열을 찾고 그 속에서 빼고 해야할거 같은데
// 대 소문자를 구별한다고? 