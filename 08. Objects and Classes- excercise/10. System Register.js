function systemRegister(array) {
let systems = {};
for (let i = 0; i < array.length; i++) {
    let [system,component,subcomponent] = array[i].split(' | ');
    if(!systems.hasOwnProperty(system)){
        systems[system]={}
        systems[system][component] = [];
        systems[system][component].push(subcomponent);

    }else {
        if(systems[system].hasOwnProperty(component)){
            systems[system][component].push(subcomponent)
        } else {
            systems[system][component]=[];
            systems[system][component].push(subcomponent);
        }
    }
    
}

let arraySystems = Object.entries(systems)
arraySystems.forEach((element)=>{ element[1] = Object.entries(element[1]).sort((a,b)=>b[1].length-a[1].length)
})
arraySystems.sort((a,b)=>{
    if(a[1].length>b[1].length || a[1].length<b[1].length) {
        return b[1].length-a[1].length
    }else {
        return a[0].localeCompare(b[0]);
    }
    
})
arraySystems.forEach((sys)=>{
    console.log(`${sys[0]}`);
    sys[1].forEach((comp)=>{
        console.log(`|||${comp[0]}`);
        comp[1].forEach((subcomp)=>{
            console.log(`|||||${subcomp}`);
            
        })
    })
    
})

}
systemRegister([ 'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security' ]
)