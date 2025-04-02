function solution(s1, s2) {
    let s2Set = new Set(s2);
    // filter 효능
    // 1. s1에서 조건에 맞는 녀석들만 남긴다.
    // .has의 효능 
    // 1. s2Set에서 el즉 s1의 요소들과 일치하는지 검증한다.
    
    let a = s1.filter((el) => s2Set.has(el))
    console.log(a)
    return a.length;
}