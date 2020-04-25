function taskPlanner(array) {
let neededHoursString = array.shift().split(' ');
let neededHours = neededHoursString.map(Number);
for (let line  of array) {
    let current= line.split(' ');
    let command = current[0];
       
     
         if(command==='Complete') {
            let index = Number(current[1]);
            if(neededHours.length>index){
                neededHours[index]=0;
            }
         }else if(command==='Change') {
            let index = Number(current[1]);
            let time = Number(current[2]);
            if(neededHours.length>index){
                neededHours[index]=time;
            }
         } else if(command==='Drop') {
            let index = Number(current[1]);
            if(neededHours.length>index){
                neededHours[index]=-1;
            }
         } 
        
      else if (command==='Count'){
        let secondWord = current[1];
        if(secondWord==='Completed'){
            let completedTasks = 0;
            neededHours
            .forEach((element)=>{
                if(element ===0){
                   completedTasks++
                }
            });
            console.log(completedTasks);
        } else if ( secondWord==='Incomplete'){
            let incompleteTasks = 0;
            neededHours
            .forEach((element)=>{
                if(element!=0 && element!=-1){
                   incompleteTasks++
                }
            });
            console.log(incompleteTasks);

        } else if (secondWord==='Dropped'){
            let droppedTasks = 0;
            neededHours
            .forEach((element)=>{
                if(element===-1){
                    droppedTasks++;
                }
            });
            console.log(droppedTasks);
        }
    }

    
}
let result =[];
neededHours
.forEach((element)=>{
    if(element>=1&&element<=5){
result.push(element);
    }
});
console.log(result.join(' '));

}
taskPlanner([ '1 -1 2 3 4 5',
'Complete 4',
'Change 0 4',
'Drop 3',
'Count Dropped',
'End' ])
taskPlanner(['1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'
    ])