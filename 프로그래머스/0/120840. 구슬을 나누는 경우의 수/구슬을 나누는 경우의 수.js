function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)));
}


// 경우의 수?

// 