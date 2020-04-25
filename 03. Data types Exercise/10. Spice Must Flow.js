function spiceMustFlow (start) {
    let current = 0;
    let day = 0;
for (let i = start; i >= 100; i-=10) {
    day++;
    current+=(i-26)
    //left=current - 26;
    }
    if(current<26) current=0;
    else current -=26;

console.log(day);

console.log(current);

}
spiceMustFlow(200)