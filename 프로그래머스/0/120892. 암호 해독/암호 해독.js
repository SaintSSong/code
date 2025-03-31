function solution(cipher, code) {
    var answer = '';
    let splitCipher = cipher.split("")

    let U = [];
    // console.log(splitCipher)
    for(let i = 1; i <= splitCipher.length; i++){
        if(i % code === 0){
            U.push(splitCipher[i-1])
        }
    }
    
    let joinU = U.join("")
    console.log("joinU", joinU)
    return joinU;
}

// split 써서 푼다.
// 4의 배수 일 때만 푼다. i % code === 0
