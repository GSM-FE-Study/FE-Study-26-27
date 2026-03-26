function solution(my_string, num1, num2) {
  let answer = my_string.split("");
  let temp = [];
  temp.push(answer[num1]);
  answer[num1] = answer[num2];
  answer[num2] = temp[0];
  return answer.join("");
}
