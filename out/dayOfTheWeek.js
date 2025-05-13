"use strict";
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 7] = "Sunday";
})(WeekDay || (WeekDay = {}));
;
function getWeekDay(dayNumber) {
    const day = WeekDay[dayNumber];
    return day ? day : 'Error';
}
console.log(getWeekDay(8));
//# sourceMappingURL=dayOfTheWeek.js.map