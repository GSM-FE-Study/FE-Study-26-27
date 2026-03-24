function solution(cipher, code) {
  let answer = cipher.split("");
  let result = [];
  for (let i = 1; code * i - 1 < answer.length; ++i) {
    result.push(answer[code * i - 1]);
  }
  return result.join("");
}
