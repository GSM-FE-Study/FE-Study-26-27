function solution(t, p) {
  var answer = 0;
  let sub = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    sub = t.slice(i, i + p.length);
    if (p >= sub) {
      answer++;
    }
  }
  return answer;
}
