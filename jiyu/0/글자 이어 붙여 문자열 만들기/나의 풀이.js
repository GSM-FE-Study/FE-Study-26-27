function solution(my_string, index_list) {
  let answer = my_string.split("");
  let result = [];
  for (let i = 0; i < index_list.length; i++) {
    result.push(answer[index_list[i]]);
  }
  return result.join("");
}
