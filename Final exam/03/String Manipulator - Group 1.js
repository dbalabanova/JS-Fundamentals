function manipulator(array) {
let string = array.shift();
//let result ;
for (let line of array) {
    if(line!=='End'){
        let [command,char, replacement]=line.split(' ');
        if(command==='Translate'){
            let pattern = new RegExp(char,'g');
            string = string.replace(pattern,replacement);
           console.log(string);
        } else if (command ==='Includes'){
            let result = string.includes(char);
            result? console.log(`True`) : console.log(`False`)
        } else if (command ==='Start'){
            let secondResult = string.startsWith(char);
            secondResult? console.log(`True`) : console.log(`False`)
        } else if (command ==='Lowercase') {
            string = string.toLowerCase();
            console.log(string);
        } else if (command === 'FindIndex'){
            let index = string.lastIndexOf(char);
            console.log(index);
        } else if (command === 'Remove'){
            let startIndex = Number(char);
            let count = Number(replacement);
            string = string.split('');
            removed = string.splice(startIndex,count)
            // let removed = string.substr(count);
           console.log(string.join(''));
            
        }
    }
}
}
manipulator([ '//Thi5 I5 MY 5trING!//',
'Translate 5 s',
'Includes string',
'Start //This',
'Lowercase',
'FindIndex i',
'Remove 0 10',
'End' ])