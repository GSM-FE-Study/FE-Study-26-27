function solution(bandage, health, attacks) {
    let real_h = health;
    let real_t = 0;
    let [t, x, y] = bandage;

    for (let i = 0;i<attacks.length;i++){
         let [attack_time, damage] = attacks[i];
        let successive = 0;
        while(true){

            real_t++;
            successive++;
            if (real_t === attack_time) {
                break;
            }
            real_h += x;
            if (successive >= t) {
                real_h += y;
                successive = 0;
            }
            if (real_h > health) real_h = health;
        }
        real_h -= damage;
        if (real_h <= 0) return -1;
    }
    return real_h;
}