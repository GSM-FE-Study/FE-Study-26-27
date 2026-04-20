function solution(survey, choices) {
    var answer = '';
    const types = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }

    choices.map((choice, i)=>{
        const [type1, type2] = survey[i];
        if (choice < 4){
            types[type1] += 4 - choice;
        }else if (choice > 4){
            types[type2] += choice - 4;
        }
    })

    answer += types.R >= types.T ? 'R' : 'T';
    answer += types.C >= types.F ? 'C' : 'F';
    answer += types.J >= types.M ? 'J' : 'M';
    answer += types.A >= types.N ? 'A' : 'N';
    
    return answer;
}