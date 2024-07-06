function solution(array) {
    var answer = 0;
    
   
    const p = array.sort((a, b) => a - b)
    
    const l =  Math.floor(p.length/2)
    
    const q = p[l]
    
    return q;
}