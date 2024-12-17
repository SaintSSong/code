function solution(array) {
    
    let mideum = array.sort(function (a,b) {
                            return a - b
                            })
    
    let answer = Math.floor(mideum.length / 2)
    
    return array[answer];
}