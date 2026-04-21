function solution(maps) {
    const dir = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    let q = [];
    q.push([0, 0]);
    maps[0][0] = 2;

    while (q.length) {
        let [x, y] = q.shift();

        for (let [dx, dy] of dir) {
            let nx = x + dx;
            let ny = y + dy;

            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < maps.length &&
                ny < maps[0].length &&
                maps[nx][ny] === 1
            ) {
                q.push([nx, ny]);
                maps[nx][ny] = maps[x][y] + 1;
            }
        }
    }

    const answer = maps[maps.length - 1][maps[0].length - 1];
    return answer === 1 ? -1 : answer - 1;
}