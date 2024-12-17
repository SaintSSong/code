function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    //최대 공약수 = 두 수의 약수 중 공통 된 최고 큰 수 
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
        }
    
    // 약분 안한 분자
    let bunja = (numer1 * denom2) + (numer2 * denom1) 
    
    // 약분 안한 분모
    let bunmo = denom1 * denom2
    
    // 약분 한 분자
    let realBunja = bunja / gcd(bunja, bunmo);
    let realBunmo = bunmo / gcd(bunja, bunmo);
    
    answer[0] = realBunja,
    answer[1] = realBunmo
    
    return answer
}

    // 최소 공배수 
    // const lcm = (denom1 * denom2) / gcd(denom1, denom2);
