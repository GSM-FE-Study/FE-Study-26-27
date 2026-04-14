function solution(n, lost, reserve) {
  let lostReal = lost
    .filter(student => !reserve.includes(student))
    .sort((a, b) => a - b);

  const reserveReal = reserve
    .filter(student => !lost.includes(student))
    .sort((a, b) => a - b);

  for (let i = 0; i < reserveReal.length; i++) {
    const student = reserveReal[i];

    for (let j = 0; j < lostReal.length; j++) {
      if (Math.abs(student - lostReal[j]) === 1) {
        lostReal.splice(j, 1);
        break;
      }
    }
  }

  return n - lostReal.length;
}

