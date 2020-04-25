function people(array) {
let neiborhoods = array.shift();
neiborhoods=[...neiborhoods.split(', ')];

let hoods = new Map();
neiborhoods
.forEach((hood)=>{
hoods.set(hood,[]);
});
for (let i = 0; i < array.length; i++) {
    let [neighborhood, person] = array[i].split(' - ');
    if(hoods.has(neighborhood)) {
       let add = hoods.get(neighborhood);
       add.push(person)
        hoods.set(neighborhood,add)
    }   
    
}
let sorted = [...hoods]
.sort((a,b)=>b[1].length-a[1].length)

for (let [place,names] of sorted) {
    console.log(`${place}: ${names.length}`);
    for (let personName of names) {
        console.log(`--${personName}`)
    }
}

}
people(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)