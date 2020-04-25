function solve(date) {
    let date = new Date(year,month,day)
let newDate = new Date(year,month,day);
newDate.setDate(date.getDate() + 1);
let theYear = newDate.getFullYear();
let theMonth = newDate.getMonth();
let theDay = newDate.getDay();
console.log(newDate);

//console.log(`${theYear}-${theMonth}-${theDay}`)

}
solve(2016, 9, 30)