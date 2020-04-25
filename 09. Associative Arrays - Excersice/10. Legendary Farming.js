function legendary(array) {
    let obtainedMaterial = '';
    let obtained = {
        'shards': 'Shadowmourne',
        'fragments': 'Valanyr',
        'motes': 'Dragonwrath' 
    }
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    }
    let junk = {};
    let input = array.split(' ')
    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = (input[i + 1])
        material = material.toLowerCase();
        //console.log(material);

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;
            if (keyMaterials[material] >= 250) {
                keyMaterials[material]-=250
            obtainedMaterial = obtained[material];
            break;
            }
        } else {
            if(!junk.hasOwnProperty(material)){
                junk[material] = quantity;
            } else {
                junk[material]+=quantity;
            }
        }

    }
    console.log(`${obtainedMaterial} obtained!`);
    let arrayKeyMaterials = Object.entries(keyMaterials).sort((a,b)=>a[0].localeCompare(b[0])).sort((a,b)=>b[1]-a[1])
    arrayKeyMaterials.forEach((element)=>{
        console.log(`${element[0]}: ${element[1]}`);
    });
    let arrayJunk = Object.entries(junk).sort((a,b)=>a[0].localeCompare(b[0]))
    .forEach((el)=>{
        console.log(`${el[0]}: ${el[1]}`);
        
    })

}
legendary('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendary('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')