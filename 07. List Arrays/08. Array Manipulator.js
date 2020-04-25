function manipulator(array) {
    let numbers = array[0].toString().split(' ');
    let nums = numbers.map(Number);
    for (let i = 1; i < array.length; i++) {
        let current = array[i].split(' ')
        let command = current[0];
        let value = Number(current[1]);

        if(command==='Add') {
            nums.push(value);
        }
        else if(command==='Remove') {
            nums = nums.filter((n)=>n!=value)
        
        }
        else if(command==='RemoveAt') {
            nums.splice(value,1)
        }
        else if(command==='Insert') {
        let index = Number(current[2]);
        nums.splice(index,0,value);
        }
    }
    console.log(nums.join(' '));
    
}
manipulator(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)