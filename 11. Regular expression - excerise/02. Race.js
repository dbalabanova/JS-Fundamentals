function race(array) {
let players = array.shift().split(', ')
let info = {};
let current = null;
let pattern = /^ /g
for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if(!current.includes(' ')){
        let name = current.match(/[A-Z]?[a-z]?/g).join('');
        let digits =current.match(/\d+/g).join('').split('')
        let sumDigits = 0;
        for (let digit of digits) {
            sumDigits+=Number(digit);
        }
        if(players.includes(name)){
        if(info.hasOwnProperty(name)){
            info[name]+=sumDigits
        }else{
            info[name]= sumDigits
        }
    }
    }    
}
let entries = Object.entries(info)
entries.sort((a,b)=>a[1]<b[1]);

console.log(`1st place: ${entries[0][0]}`)
console.log(`2nd place: ${entries[1][0]}`)
console.log(`3rd place: ${entries[2][0]}`)

}
race([ 'George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race' ])