function solution(clothes) {
    let TypeMap = new Map();

    clothes.forEach(([name, type]) => {
        if (TypeMap.has(type)) {
            TypeMap.set(type, TypeMap.get(type) + 1);
        } else {
            TypeMap.set(type, 1);
        }
    });

    let answer = 1;

    for (const count of TypeMap.values()) {
        answer *= (count + 1);
    }

    return answer - 1;
}