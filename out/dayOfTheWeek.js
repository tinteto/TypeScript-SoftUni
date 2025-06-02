"use strict";
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
;
function getWeekDay(dayNumber) {
    const day = Days[dayNumber];
    return day ? day : 'Error';
    //console.log(WeekDays[dayNumber] || 'Error');
}
console.log(getWeekDay(8));
//# sourceMappingURL=dayOfTheWeek.js.map