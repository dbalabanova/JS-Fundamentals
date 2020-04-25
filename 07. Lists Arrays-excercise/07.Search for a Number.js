function searchForNumber(numbers,specials) {
let toTake = specials[0];
let toDelete = specials[1];
let toSearch = specials[2];
let count=0;
let taken = numbers.slice(0,toTake);
taken.splice(0,toDelete);
for (let i = 0; i < taken.length; i++) {
    let occur = taken.indexOf(toSearch);
    if(occur!=-1){
        count++;
    }
    taken.splice(occur,1);
    
}
if(taken.includes(toSearch)) count++;
console.log(`Number ${toSearch} occurs ${count} times.`);

}
searchForNumber([1, 5, 3, 3, 3, 6],
    [5, 2, 3]
    )