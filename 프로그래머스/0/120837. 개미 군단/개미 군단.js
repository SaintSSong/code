function solution(hp) {

    let generalAnte = Math.floor(hp / 5)
    console.log("generalAnte", generalAnte)
    let restGeAnte = hp % 5
    console.log("restGeAnte", restGeAnte)
    
    let solAnte =  Math.floor(restGeAnte / 3)
    console.log("solAnte", solAnte)
    let restSolAnte = restGeAnte % 3
    console.log("restSolAnte", restSolAnte)    
    
    let workAnte = Math.floor(restSolAnte / 1)
    console.log("workAnte", workAnte)    
    let restWorkAnte = workAnte % 1
    console.log("restWorkAnte", restWorkAnte)    
    
    let answer = (generalAnte + solAnte + workAnte);
    console.log("answer", answer)
    
    return answer;
}

// hp가 딱 떨어지는 문제라
// if문? 큰 숫자로 해서 먼저 5로 나누고 나머지를 변수로 두고 
// 그 변수를 if문으로 돌려버리면 되지 않을까?
// 조건은 23일때 5로 나누면 나머지면 3 
// 이때 3을 n으로 두고 나누는거지
