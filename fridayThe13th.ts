function getDate(data: unknown[]): void {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    for (let item of data) {
        const date = new Date(item as any);
        let isValidDate = !isNaN(date.getTime());
      
        if(
            date instanceof Date && 
            isValidDate && 
            date.getDate() === 13 && 
            date.getDay() === 5 
        ) {
                
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            console.log(`${day}-${month}-${year}`);

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
