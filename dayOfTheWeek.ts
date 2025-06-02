enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
};


function getWeekDay(dayNumber: number): string {

const day = Days[dayNumber]; 

return day ? day: 'Error';
//console.log(WeekDays[dayNumber] || 'Error');

}

console.log(getWeekDay(8));
