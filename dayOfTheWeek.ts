enum WeekDay {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
};


function getWeekDay(dayNumber: number): string {
const day = WeekDay[dayNumber];

return day ? day: 'Error';

}

console.log(getWeekDay(8));
