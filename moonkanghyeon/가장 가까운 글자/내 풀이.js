function solution(s) {
  const map = {};
  const a = [];
  for (let i = 0; i < s.length; i++) {
    const b = s[i];
    if (map[b] === undefined) {
      a.push(-1);
    } else {
      a.push(i - map[b]);
    }
    map[b] = i;
  }
  return a;
}
