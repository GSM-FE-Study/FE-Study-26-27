function solution(order) {
  let answer = String(order).split("");
  let count = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == 3 || answer[i] == 6 || answer[i] == 9) count++;
  }
  return count;
}
