function solution(price) {
    let b = price
    
    if( b >= 500000) {
        
        return Math.floor(b * 0.8)
        
    } else if ( b >= 300000){
        
        return Math.floor(b * 0.9)
        
    } else if (b >= 100000) {
        
        return Math.floor(b * 0.95)
        
    } else {
        
        return Math.floor(b)
        
    }
    
}