function solution(price, money, count) {
  let answer = 0;
  let a = 0;
  for (let i = 1; i <= count; i++) {
    a += price * i;
  }
  answer = a - money;
  if (answer < 0) {
    return 0;
  } else {
    return answer;
  }
}
