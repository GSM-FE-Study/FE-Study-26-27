function solution(a, b) {
  const isOdd = (num) => num % 2 === 1;

  return isOdd(a) && isOdd(b)
    ? a ** 2 + b ** 2
    : isOdd(a) || isOdd(b)
      ? 2 * (a + b)
      : Math.abs(a - b);
}
