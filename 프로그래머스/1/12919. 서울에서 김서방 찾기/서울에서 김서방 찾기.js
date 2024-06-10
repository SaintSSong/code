function solution(seoul) {
    // 1. "Kim"의 위치를 찾습니다.
    const index = seoul.indexOf("Kim");
    
    // 2. "김서방은 x에 있다"라는 문자열을 만듭니다.
    const result = `김서방은 ${index}에 있다`;
    
    // 3. 결과 문자열을 반환합니다.
    return result;
}