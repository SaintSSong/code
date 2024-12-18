function solution(n) {
  // 피자 한 판이 7조각으로 나뉘므로,
  // 필요한 피자 수는 'n / 7'을 올림한 값입니다.
  
  // Math.ceil()을 사용해서 올림을 처리합니다.
  let pizzas = Math.ceil(n / 7);

  return pizzas; // 필요한 피자의 수를 반환합니다.
}