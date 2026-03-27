function solution(num, k) {
  let answer = String(num).split("");
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == k) return i + 1;
  }
  return -1;
}
