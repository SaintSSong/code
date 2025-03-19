function solution(num_list) {
    let solo = [];
    let double = [];
    var answer = [];
    
        for(let i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 === 0) {
                double.push(i);
            } else {
                solo.push(i);
            }  
        }

    let a = solo.length;
    let b = double.length;
    console.log(solo)
    console.log(double)
    console.log(a)
    console.log(b)
    
    answer[0] = b;
    answer[1] = a;

    return answer;
}

// 배열이 주어지고 정수와 짝수의 개수를 담은 배열을 return하라?
// 우선 num_list의 요소를 전부 돌아서 정수랑 짝수의 요소들만 따로 빼놔야겠네?
// 그러고 그 요소들은 정수, 짝수라는 배열에 집어넣고
// answer라는 배열에 "정수", "짝수"라는 배열의 갯수만 answer[] 이런 식으로 넣으면 되겠네
