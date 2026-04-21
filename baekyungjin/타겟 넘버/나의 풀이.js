function solution(numbers, target) {
    var answer = 0;

    dfs(0, 0);
    function dfs(node, sum){
        if (node === numbers.length) {
            if (sum === target) answer++;
            return;
        }


        dfs(node + 1, sum - numbers[node]);
        dfs(node + 1, sum + numbers[node]);
    }
    return answer;
}
