function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge_q = new Array(bridge_length).fill(0);

    while (truck_weights.length) {
        time++;
        bridge_q.shift();

        let truck = truck_weights.shift();
        let sum = bridge_q.reduce((acc, cur) => acc + cur, 0);

        if (sum + truck <= weight) {
            bridge_q.push(truck);
        } else {
            bridge_q.push(0);
            truck_weights.unshift(truck);
        }
    }

    return time + bridge_length;
}