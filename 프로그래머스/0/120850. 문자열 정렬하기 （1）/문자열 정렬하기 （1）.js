function solution(my_string) {

    let a = my_string.split("")
    
    let b = a.filter(p => Number.isFinite(Number(p)));
    
    let c = b.map((y) => Number(y))
    
    let d = c.sort((a,z) => a - z)
    

    return d;
}

// 1. 매개변수를 split으로 쪼갠다. 꼭 잊지 말자 쪼개면 문자열이 된다.
// 2. map이든 for든 돌려서 숫자만 빼고 그걸 새로운 배열에 넣는다. filter도 가능하다.
// 3. 이후 정렬한다. 

// 내가 몰랐던 것!
// 1. Number.isFinite() 함수 인자가 숫자인지 엄격하게 판별해주는 메서드
// 2. sort는 숫자만 가능하다! 문자열은 가능하지 않다.!!