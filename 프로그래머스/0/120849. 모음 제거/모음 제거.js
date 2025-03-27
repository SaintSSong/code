function solution(my_string) {
    var answer = '';
    
    let splitMy = my_string.split('');
    
    console.log("splitMy",splitMy)
    
    let c = ["a","e","i","o","u"]
    
    let a = splitMy.filter(a => !c.includes(a))
    
    console.log(a)
    let d = a.join('')
    return d;
}

// 특정 문자열을 배제해야한다.

// 뺀다? pop?? 
// 1. my_string을 split으로 나눈다. ('')
// for 문을 통해서 my_string의 배열의 요소를 보는데
// 이때 if문을 통해서 (모음이 들어있다?) 뺀다. 그걸 새로운 문자열에 넣는다.