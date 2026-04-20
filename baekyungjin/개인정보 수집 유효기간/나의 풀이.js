function solution(today, terms, privacies) {
    let answer = [];
    let privacy_year;
    let privacy_month;
    let privacy_day;
    
    today = today.split(".").map(Number);

    privacies.map((privacy, i) => {
        privacy = privacy.split(" ");
        
        terms.map((term) => {
            term = term.split(" ");
            
            if (term[0] === privacy[1]) {
                privacy_year = Number(privacy[0].split(".")[0]);
                privacy_month = Number(privacy[0].split(".")[1]) + Number(term[1]);
                privacy_day = Number(privacy[0].split(".")[2]);
                
                while (privacy_month > 12) {
                    privacy_month -= 12;
                    privacy_year++;
                }
                
                privacy_day--;
                
                if (privacy_day === 0) {
                    privacy_day = 28;
                    privacy_month--;
                    
                    if (privacy_month === 0) {
                        privacy_month = 12;
                        privacy_year--;
                    }
                }
            }
        });
        
        if (
            today[0] > privacy_year ||
            (today[0] === privacy_year && today[1] > privacy_month) ||
            (today[0] === privacy_year && today[1] === privacy_month && today[2] > privacy_day)
        ) {
            answer.push(i + 1);
        }
    });
    
    return answer;
}