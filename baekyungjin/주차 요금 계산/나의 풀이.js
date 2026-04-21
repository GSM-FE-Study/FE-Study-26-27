function solution(fees, records) {
    var answer = [];
    let park = {};
    
    const [general_time, general_fee, unit_time, unit_fee] = fees;
    
    records.forEach((v) => {
        let [time, car_number, type] = v.split(" ");
        let [hour, minute] = time.split(":").map(Number);
        let currentTime = hour * 60 + minute;
        
        if (!park[car_number]) {
            park[car_number] = {
                inTime: currentTime,
                totalTime: 0,
                type: type,
            };
        } else if (type === "OUT") {
            park[car_number].type = "OUT";
            park[car_number].totalTime += currentTime - park[car_number].inTime;
            park[car_number].inTime = 0;
        } else {
            park[car_number].inTime = currentTime;
            park[car_number].type = "IN";
        }
    });
    
    Object.keys(park).forEach((car_number) => {
        if (park[car_number].type === "IN") {
            park[car_number].totalTime += (23 * 60 + 59) - park[car_number].inTime;
        }
    });
    
    answer = Object.keys(park)
        .sort()
        .map((car_number) => {
            let totalTime = park[car_number].totalTime;
            
            if (totalTime <= general_time) {
                return general_fee;
            }
            
            return general_fee + Math.ceil((totalTime - general_time) / unit_time) * unit_fee;
        });
    
    return answer;
}