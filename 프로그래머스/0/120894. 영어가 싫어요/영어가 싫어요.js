function solution(numbers) {
    let answer = '';
    let words = '';
    
    let a = {"zero": 0, "one": 1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9}
    
    for(let g of numbers){
        words += g;
        
        if(words in a){
            answer += a[words];
            words = '';
        }
    }
    
    console.log("answer",answer)
    console.log("words", words)
    
    return Number(answer);
}

// 와 이걸 어떻게 알지?
// 글자를 쪼갤 때 기준이 어떻게 되는거지? 
// for of로 순회해서 완성되면 올린다?