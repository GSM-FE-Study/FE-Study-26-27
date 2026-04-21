function solution(priorities, location) {
    let answer = 0;
    let q = priorities.map((v, i) => [v, i]);

    while (q.length) {
        let cur = q.shift();
        let insert = q.some((v) => cur[0] < v[0]);

        if (insert) {
            q.push(cur);
        } else {
            answer++;
            if (cur[1] === location) {
                return answer;
            }
        }
    }
}
