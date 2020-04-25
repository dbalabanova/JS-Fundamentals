function companyUsers(array) {
let unique = new Set();
let companyEmployees ={};
array.forEach((line)=>{
let [company,id] = line.split(' -> ');
if(!companyEmployees.hasOwnProperty(company)){
    companyEmployees[company] = [];
    companyEmployees[company].push(id)
} else {
    companyEmployees[company].push(id);
}
companyEmployees[company] =companyEmployees[company].filter((id,index)=>companyEmployees[company].indexOf(id)===index)
});

let arrayCompanies = Object.entries(companyEmployees)
let sorted = arrayCompanies.sort(sortedByName)
.forEach(([nameCompany,personId])=>{
console.log(`${nameCompany}`);
for (let currentId of personId) {
console.log(`-- ${currentId}`);
    
}
})
 function sortedByName(firstCompany,secondCompany) {
     let firstName = firstCompany[0];
     let secondName = secondCompany[0]
return firstName.localeCompare(secondName);
 }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )