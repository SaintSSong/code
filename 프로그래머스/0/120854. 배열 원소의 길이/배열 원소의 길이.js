function solution(strlist) {
    var answer = [];
    let a = strlist;
    
    for(let i =0; i < a.length; i++) {
        console.log(a[i].length)
        answer.push(a[i].length)
    }
    return answer;
}

// 어찌보면 이중 배열?

// 각 원소마다 길이를 구하라? length?
// for문으로 돌리고 각 i마다의 length를 answer.push([].lenght)하면 될거 같은데?
