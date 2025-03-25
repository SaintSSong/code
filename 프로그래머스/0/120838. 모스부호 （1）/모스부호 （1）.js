function solution(letter) {
    var answer = '';
    // console.log("letter", letter)
    
    // 모스부호 딕셔너리 준비
const morse = { '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z' };
    console.log("letter", letter)
// letter를 공백 기준으로 쪼갠다
const words = letter.split(" ");
    // console.log("words", words)

// 각 모스 부호를 알파벳으로 바꾼다
const result = words.map(el => morse[el]);

// 다시 문자열로 합친다
return result.join("")

}