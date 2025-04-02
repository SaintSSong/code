function solution(my_string, num1, num2) {
    var answer = '';
    let emWord = '';
    let a = my_string.split('');
    console.log(a)
    
    emWord = a[num1] // e
    console.log("emWord",emWord)
    
    a[num1] = a[num2]  // e => l
    console.log("a[num2]", a[num2])
    
    a[num2] = emWord // l => e
    console.log("a[num1]", a[num1])
    
    console.log("a2", a)
    let b = a.join("")
    console.log("b",b)
    return b;
}

// 1. 문자를 바꾼다. 바뀌는 문자를 저장해 둘 변수가 하나 필요하다.

// 2. 
