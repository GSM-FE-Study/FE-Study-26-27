function solution(numbers, hand) {
    let answer = "";
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };

    let [L_x, L_y] = keypad['*'];
    let [R_x, R_y] = keypad['#'];

    numbers.forEach((v) => {
        let [x, y] = keypad[v];

        if (y === 0) {
            answer += "L";
            [L_x, L_y] = [x, y];
            return;
        }

        if (y === 2) {
            answer += "R";
            [R_x, R_y] = [x, y];
            return;
        }

        let L_d = Math.abs(L_x - x) + Math.abs(L_y - y);
        let R_d = Math.abs(R_x - x) + Math.abs(R_y - y);

        if (L_d < R_d) {
            answer += "L";
            [L_x, L_y] = [x, y];
        } else if (L_d > R_d) {
            answer += "R";
            [R_x, R_y] = [x, y];
        } else {
            if (hand === "left") {
                answer += "L";
                [L_x, L_y] = [x, y];
            } else {
                answer += "R";
                [R_x, R_y] = [x, y];
            }
        }
    });

    return answer;
}
