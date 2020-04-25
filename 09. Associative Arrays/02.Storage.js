function storage(array) {
let store = new Map();

array
.forEach((line)=>{
    let[key,value] = line.split(' ');
    value = Number(value);
    if(store.has(key)){
        value = store.get(key) +value;
    } 
    store.set(key,value);

});
let output = [...store];
output
.forEach((s)=>{
console.log(`${s[0]} -> ${s[1]}`);

})
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)