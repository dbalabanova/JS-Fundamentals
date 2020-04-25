function manager(array) {
    let maxCapacity = Number(array.shift());
    let persons = {};
    let final = {};
    // first sent and second received
    // да проверя още в началото да не подават числа по големи от максимални     капацитет
    // втората проверка дали трябва да е с else if
    for (let line of array) {
        if (line !== 'Statistics') {
            if (line.includes('Add')) {
                let [command, username, sent, received] = line.split('=');
                sent = Number(sent);
                received = Number(received);
                if (!persons[username]) {
                    persons[username] = [sent, received]
                }
            } else if (line.includes('Message')) {
                let [command, sender, receiver] = line.split('=');
                if (persons[sender]){
                    if(persons[receiver]){
                        persons[sender][0]++;
                        persons[receiver][1]++;
                        let firstCheck = persons[sender].reduce((a,b)=>a+b,0)
                        let secondCheck = persons[receiver].reduce((a,b)=>a+b,0);
                        if(firstCheck>=maxCapacity){
                            console.log(`${sender} reached the capacity!`);
                            delete persons[sender];
                        } if(secondCheck>=maxCapacity){
                            console.log(`${receiver} reached the capacity!`);
                            delete persons[receiver];

                        }
                        
                    }
                }
            } else if (line.includes('Empty')){
                let [command,username]=line.split('=');
                if(username!='All'){
                    if(persons[username]){
                        delete persons[username]
                    }
                } else if (username==='All'){
                    persons = {};
                }
            }
        }

    }
  let sorted = Object. entries(persons)
  .sort((a,b)=>{
    
    return b[1][1] - a[1][1] || a[0].localeCompare(b[0])
  })
  let users = sorted.length;
  console.log(`Users count: ${users}`);
  sorted. forEach((element)=>{
    let[name,messages]=element;
    let allMessages= messages.reduce((a,b)=>a+b,0);
    console.log(`${name} - ${allMessages}`);
  })
}
manager(['10',
    'Add=Mark=5=6',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'])
manager(['20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'])