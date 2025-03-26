function solution(letter) {
    var answer = '';
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    let a = letter.split(' ')
    // console.log(a)
    // a = 	[ '....', '.', '.-..', '.-..', '---' ]
    
    let b = a.map((c) => morse[c])
    
    console.log(b)
    
    let d = b.join('')
        console.log(d)
    return d;
}

// 문자열을 매개변수로 준다.
// 