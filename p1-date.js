/*
    CIT 281 Project 1
    Name: Abby Gregg
*/
function getDay(date) {
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = date.getDay();
    return days[day]; 
}

let date = new Date();
let weekDay = getDay(date);
console.log(weekDay);


