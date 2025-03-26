function solution(rsp) {

    let sRSP = rsp.split("")
    console.log("sRSP", sRSP)
    
    let aRSP = sRSP.map((a) => {
        if(a === "2") {
            return "0"
        } else if (a === "0"){
            return "5"
        } else if (a === "5") {
            return "2"
        }
    }) 
    
    console.log("aRSP", aRSP)
    
    let s = aRSP.join('')
    return s;
}

// 문자열 rsp
// 문자열로 return 