function solve(num,incr) {
    let count = 0;
    let height = 0;
    let currentHeight = 0;
    let currentstone = 0;
    let currentmarble = 0;
    let currentlazuli =0;
    let currentgold = 0;
    
    for (let j = num; j >=1; j-=2) {
       height++;
        }
       
    
    for (let i = num; i >=1; i-=2) {
        currentHeight++;
        count++;
        let base = i*i;
        let inner = (i-2)*(i-2);
        let outerLayer = base - inner;
        if(i<=2) {
            inner =0; 
            outerLayer=0;
        }
        currentstone += inner;
        currentmarble+=outerLayer;
       
            if(count==height){
                currentgold+=base;
                //currentstone-=inner;
                //currentmarble-=outerLayer;
            }
             if(currentHeight==5 ||(currentHeight==5 && count==height)){
                currentHeight=0;
                currentlazuli += outerLayer;
                currentmarble-=outerLayer;
           }
        }
    console.log(`Stone required: ${Math.ceil(currentstone*incr)}`)
    console.log(`Marble required: ${Math.ceil(currentmarble*incr)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(currentlazuli*incr)}`)
    console.log(`Gold required: ${Math.ceil(currentgold*incr)}`)
    console.log(`Final pyramid height: ${Math.floor(height*incr)}`)
    
    
    }
solve(12, 1)