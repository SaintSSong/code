function solution(numbers) {

    console.log(numbers)
    let a = numbers.sort((a,z) => z-a)
    console.log(a)
       var answer = a[0] * a[1]
    return answer;
}

// 정렬해서 맨 뒤의 녀석 두개를 곱하면 되잖아? 아님 맨 앞에 녀석 두개 곱하고