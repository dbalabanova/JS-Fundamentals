function schoolGrades(array) {
let student = new Map();

array
.forEach((line)=>{
 let [ name, ...grades] = line.split(' ');
 grades = grades.map(Number);
 if(student.has(name)){
     let newGrades = student.get(name).concat(grades);
     student.set(name,newGrades)
 } else {
    student.set(name,grades);
 }
});
let avg = grades => grades.reduce((a,b)=>a+b)/grades.length
let sorted = [...student.entries()]
.sort((a,b)=>avg(a[1])-avg(b[1]));

sorted
.forEach((st)=>{
    console.log(`${st[0]}: ${st[1].join(', ')}`)
})
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)