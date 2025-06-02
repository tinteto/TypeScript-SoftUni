"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
function printDayNumber(dayName) {
    //трябва да докажем, че стринга е валиден и реален ключ в енумерацията
    //keyof WeekDays - ще включи само числовите ключове
    //keyof typeof WeekDays - за да разполагаме и с числовите и със стринговите ключове на енумерацията
    console.log(WeekDays[dayName] || 'error');
}
printDayNumber('Monday');
//# sourceMappingURL=reversedDayOfTheWeek.js.map