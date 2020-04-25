function world(array) {
let repeat = new Map();
for (let i = 0; i < array.length; i++) {
let count = 0;
    
    let word = array[i];
    for (let j = 0; j < array.length; j++) {
        if(word ===array[j]){
            count++
        }
    repeat.set(word,count)
        
    }
}
let sorted = [...repeat]
.sort((a,b)=>b[1]-a[1])
.forEach((el)=>{
    console.log(`${el[0]} -> ${el[1]} times`)
})

}
world(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])