function getDate(data: unknown[]): void {
    enum Months {
        January, 
        February, 
        March, 
        April, 
        May, 
        June,
        July, 
        August, 
        September, 
        October, 
        November, 
        December
    };

    for (let date of data) {
        if(date instanceof Date) {
            const monthDay = date.getDate();
            const weekDay = date.getDay();
            const monthNum = date.getMonth();
            const year = date.getFullYear();

            if(monthDay === 13 && weekDay === 5) {
            console.log(`${monthDay}-${Months[monthNum]}-${year}`);
            }
        } 
    }    
}

getDate([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
    ])
