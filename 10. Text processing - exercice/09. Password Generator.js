function passGen(array) {
let passtoReplace = array[0].concat(array[1]).toLowerCase();
let replace = array[2].toUpperCase();
let letters = replace.split('');
let pass = passtoReplace.split('')
for (let i = 0; i < pass.length; i++) {
    let current = pass[i];
    if(pass[i]==='a'||pass[i]==='o'||pass[i]==='i'||pass[i]==='e'||pass[i]==='u'){
        if(letters.length===0){
            letters = replace.split('');

        }
        let currentReplace = letters.shift();
        //console.log(current);
        
        pass[i]= currentReplace
        //console.log(current);

      
    }
    
}
let output = pass.reverse().join('');
console.log(`Your generated password is ${output}`);

}
passGen([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )
    passGen([
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
        ]
        
        )