function phoneBook(array) {
let person = {};

array.
forEach((line)=>{
    let[key,value]= line.split(' ');
    person[key]=value
});
for (let key in person) {
    console.log(`${key} -> ${person[key]}`);
}

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)