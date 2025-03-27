function solution(box, n) {

    let a = Math.floor(box[0]/n);
    let b = Math.floor(box[1]/n);
    let c = Math.floor(box[2]/n);
    
    var answer = a*b*c;
    console.log("a",a,"b",b,"c",c)
    
    return answer;
}

// 직 육면체? 