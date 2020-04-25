    function employees (array){
  
        class Employees {
          constructor (name, number){
            this.name = name;
            this.number = number;      
          }
        }
        let employees = [];
        
        for (let i = 0; i < array.length; i++){
          let name = array[i]
          let number = array[i].length
          let employee = new Employees (name, number)
          employees.push(employee)
        }
        employees.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.number}`) )
      }
    
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )