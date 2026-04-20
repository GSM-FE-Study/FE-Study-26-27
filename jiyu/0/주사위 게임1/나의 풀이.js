function solution(a, b) {
  if (a % 2 != 0 || b % 2 != 0) {
    if (a % 2 != 0 && b % 2 != 0) {
      return a * a + b * b;
    }
    return 2 * (a + b);
  }
  return Math.abs(a - b);
}
