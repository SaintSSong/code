function solution(my_string, n) {
    var answer = [];
    let a = my_string.split("")
    
    
    for (let i = 0; i < a.length; i++){
         let aa =  my_string[i].repeat(n)
        console.log(aa)
        
        answer += aa
        
        console.log(answer)
    }

    return answer;
}

// 각 문자를 n 만큼 반복한다?
// 우선 문자를 다 쪼개야겠네? split
// 반복한다? repeat? 
// 쪼개고 반복한걸 다시 집어넣는게 하나의 루틴이 되야해 즉 for문안에서 다 이루어져야하나?
// join을 써야하나? +=은 안되나?
