function solution(hp) {
    
    // 몫과 나머지    hp 23
    let gA = Math.floor(hp / 5); //  4
    let rA = hp % 5; //  3
    console.log(rA)

    let sA = Math.floor(rA / 3); // 4 / 3 => 1.3333
    let rSA = rA % 3; // 1.33333
console.log(rSA)
    
    let wA = Math.floor(rSA / 1);
    let rWA = rSA % 1;
    
    let answer = (gA + sA + wA);
    
    return answer;
}


// 문제에서 요구하는 바는 최소한의 개미 사용율