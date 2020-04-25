function arenaTier(array) {
let pool = {};
array.forEach((line)=>{
if(line.includes('->')){
    let [gladiator,technique,skill] = line.split(' -> ');
    skill=Number(skill)
    if(!pool.hasOwnProperty(gladiator)){
        pool[gladiator] = {};
        pool[gladiator][technique] = skill;
        pool[gladiator].totalPower = skill;
    } else {
        if(!pool[gladiator].hasOwnProperty(technique)){
            pool[gladiator][technique] = skill;
        }else {
            if(pool[gladiator][technique] <skill){
            pool[gladiator][technique] = skill;
            }
        }
        pool[gladiator].totalPower += skill;

    }
    //console.log(pool);
    
} else if (line.includes('vs')){
let [firstGladiator, secondGladiator] = line.split(' vs ');

if(pool.hasOwnProperty(firstGladiator)&&pool.hasOwnProperty(secondGladiator)){
    let techniquesFirst = Object.entries(pool[firstGladiator]);
    let techniquesSecond = Object.entries(pool[secondGladiator]);

   for (let i = 0; i < techniquesFirst.length; i++) {
    let currentTechniqueFirst =techniquesFirst[i][0];
    
    for (let j = 0; j < techniquesSecond.length; j++) {
    let currentTechniqueSecond= techniquesSecond[j][0];
        if(currentTechniqueFirst===currentTechniqueSecond&&currentTechniqueFirst!='totalPower'){
            if(pool[firstGladiator].totalPower<pool[secondGladiator].totalPower){
               deleted =  delete pool[firstGladiator];
            } else {
                delete pool[secondGladiator]
            }
        }
        
    }
       
   }
}
} 
});
let arrayPool = Object.entries(pool).sort((a,b)=>b[1].totalPower-a[1].totalPower)
arrayPool.forEach((element)=>{
let name = element.shift();
let skills = Object.entries(...element).sort((a,b)=>a[0].localeCompare(b[0])).sort((a,b)=>b[1]-a[1])
for (let i = 0; i < skills.length; i++) {
   if(skills[i].includes('totalPower')){
       skills.splice(i,1)
   }
}
console.log(`${name}: ${pool[name].totalPower} skill`);
skills.forEach(([tech,points])=>{
    console.log(`- ${tech} <!> ${points}`);
})

})

}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ])
    arenaTier([
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Heal -> 210',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
        ]
        )