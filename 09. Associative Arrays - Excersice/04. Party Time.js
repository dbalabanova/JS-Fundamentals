function party(array) {
    let guests = {
        'vip': [],
        'regular':[]
    }

    let index = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        if (array[i] === 'PARTY') {
            index = i;
            break;
        }
            if (isNumber(currentNum[0]) ) {
                guests['vip'].push(currentNum)
            } else {
                guests['regular'].push(currentNum)
            }
        
    }
    function isNumber(num) {
        if(!isNaN(num)){
            return true
        }
    }
    
    for (let j = index + 1; j < array.length; j++) {
        let currentGuest = array[j];
        if(guests['vip'].includes(currentGuest)){
            let currentIndex = guests['vip'].indexOf(currentGuest)
            guests['vip'].splice(currentIndex,1);
        } else if(guests['regular'].includes(currentGuest)){
            let currentIndex = guests['regular'].indexOf(currentGuest)
            guests['regular'].splice(currentIndex,1);
        }
    
}
let sumLength = 0;
let arrayGuests =Object.entries(guests)
.forEach((guestList)=>{
sumLength+=guestList[1].length;
})
console.log(sumLength);
arrayGuests =Object.entries(guests)
.forEach((leftguests)=>{
    if(leftguests[1].length>0)
console.log(`${leftguests[1].join('\n')}`);

})

}
// party(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]
// );
party(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)