function solution(my_string) {
    let a = my_string;
    
    let splitA = a.split("");
    console.log(splitA)
    
    let reverseSplitA = splitA.reverse();
    
    console.log(reverseSplitA)
    
    let JoinReverseSlpitA = reverseSplitA.join('');
    
    console.log(JoinReverseSlpitA)

    return JoinReverseSlpitA;
}

// 1. 배열을 뒤집는 메서드는 안다. reverse
// 2. 문자열을 뒤집는 메서드가 있을까? 
// 3. gpt를 찾아보니 그런 것은 없다. 그러면 어떻게 해야할까?
// 4. 단어를 쪼갠다. 쪼개는 메서드는 뭐가 있지? split("")공백을 기준으로 싹다 잘라 
// 5. 우선 쪼개면 배열로 변환이 된다. 배열을 뒤집어버리자! reverse
// 6. 뒤집힌 배열을 다시 합치자 join("") ""공백을 기준으로 싹다 합쳐