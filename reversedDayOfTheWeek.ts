enum WeekDays {
    Monday = 1,
    Tuesday, 
    Wednesday, 
    Thursday,
    Friday,
    Saturday, 
    Sunday
};

function printDayNumber(dayName: string) : void {
    //трябва да докажем, че стринга е валиден и реален ключ в енумерацията
    //keyof WeekDays - ще включи само числовите ключове
    //keyof typeof WeekDays - за да разполагаме и с числовите и със стринговите ключове на енумерацията
 console.log(WeekDays[dayName as keyof typeof WeekDays] || 'error');
 
}

printDayNumber('Monday');