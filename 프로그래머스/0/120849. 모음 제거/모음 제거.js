function solution(my_string) {
    var answer = '';
    
    let splitMy = my_string.split('');
    
    console.log("splitMy",splitMy)
    
    let c = ["a","e","i","o","u"]
    
    let a = splitMy.filter(a => !c.includes(a))
    
    console.log(a)
    let d = a.join('')
    return d;
}

// 특정 문자열을 배제해야한다.

// 뺀다? pop?? 
// 1. my_string을 split으로 나눈다. ('')
// for 문을 통해서 my_string의 배열의 요소를 보는데
// 이때 if문을 통해서 (모음이 들어있다?) 뺀다. 그걸 새로운 문자열에 넣는다.

// 내가 모르던 것!
// 1. filter()는 "배열 메서드" 즉 특정 문자열이든 숫자열이든 배열로 되어 있으면 기존 배열에서 뺄 수 있따.
// 1-1. filter()는 기존 배열에서 false만을 빼버리기 때문에 잘 봐야한다.
// ex) const filtered = fruits.filter(fruit => fruit !== 'apple');
// 'apple'가 아닌 것만 뽑아낸다.
// 2. includes()함수!  이것은 참/거짓을 나타내는 함수로써 여기서는 "c"라는 내용이 들어있는지 보고 판단
// 하지만 앞에 !를 붙임으로써 true를 false로 바꿈.