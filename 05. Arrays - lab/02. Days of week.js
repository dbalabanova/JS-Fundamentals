function daysOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday']
    if (day < 0 || day > days.length) {
        console.log('Invalid day!');

    } else {
        console.log(days[day-1]);

    }

}
daysOfWeek(-8)