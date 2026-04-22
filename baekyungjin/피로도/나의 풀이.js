function solution(k, dungeons) {
    let max = 0;
    let HP = k;
    let visited = new Array(dungeons.length).fill(false);

    dfs(HP, max)
    function dfs(hp, cnt){
        max = Math.max(cnt, max);
        for (let i = 0;i<dungeons.length;i++){
            let [need, use] = dungeons[i];

            if (!visited[i] && hp >= need) {
                visited[i] = true;
                dfs(hp - use, cnt + 1);
                visited[i] = false;
            }
        }
    }

    return max;
}