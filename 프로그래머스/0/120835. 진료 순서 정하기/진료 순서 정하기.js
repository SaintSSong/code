function solution(emergency) {
    
    let a = [...emergency].sort((a,z) => z-a);
    console.log("a", a)
    
    // 정렬된 내림차순의 요소의 위치를 
    // 원본 배열의 요소들을 찾아서 위치 값만 덮어씌어준다.
    // 대신 정렬된 내림차순은 위치들은 0에서 부터 시작이니까 1부터 시작하게 +1
    let answer = emergency.map((b) => a.indexOf(b)+1)
    
    // console.log(answer)
    return answer;
}

// 정렬이 아니라 그냥 숫자 비교해서 순위를 정하는거네?

// 혹시 이런거도 되나? 우선 정렬해서 순위를 정하고 기존 배치로 다시 넣는거지

// sort를 쓰는데 sort((a,z) z-a)로 하면 내림차순이 되니까

// 내림차순을 한 후에 원본 배열의 값을 덮어씌운다??
