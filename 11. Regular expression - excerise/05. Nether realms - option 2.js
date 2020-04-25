function dontknow(arr) {
    let monsters = {};
    //let multiply = 1;
let list = arr[0].split(/[, ]+/g);
list.forEach(element => {
   let patternHealth = /[^\+\-\*\/\.0-9]/g; 
   let patternDamage = /[\-\+]*\d+[.\d+]*/g;
   let action = /[\/\*]/g;
   let patternName = /[^, ]+/g;
   let totalHealth = 0;
   let totalDamage = 0;
   if(element.match(patternName)){
       let health = element.match(patternHealth);
       if(health===null) totalHealth=0;
       else {
           health = health.map((e)=>{
               totalHealth+=e.charCodeAt()
           });
       }
       monsters[element]=[totalHealth]
       let damage = element.match(patternDamage);
       
       if(damage ===null)totalDamage=0;
       else {
           totalDamage = damage.map(Number).reduce((a,b)=>a+b,0)
       }
if(element.match(action)){
    let actions = element.match(action).forEach((act)=>{
        if(act==='*') totalDamage*=2;
        if(act==='/') totalDamage/=2;
    })
}

monsters[element].push(totalDamage)
   }
});
let entries = Object.entries(monsters)
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .forEach((demon)=>{
        let[name,info]= demon;
        let [health,damage]=info;
      console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
        
    })

      //console.log(monsters);

}
dontknow(['M3ph-0.5s-0.5t0.0/**']);
dontknow(['M3ph1st0**, Azazel'])