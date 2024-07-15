function solution(n) {

    // 숫자를 글자로 치환
    let a = n.toString();
    
    // 글자를 하나씩 나누는 매서드
    let b = a.split("");
    
    let sum = 0
    
    for(let i=0; i < b.length; i++) {
       sum += parseInt(b[i])
    }
    
    return sum
}
// // 내가 알았던 것
//  1. 아 이거 하나씩 나눠야겟다.
//  2. for문을 돌리고 


// // 내가 몰랐던 것 