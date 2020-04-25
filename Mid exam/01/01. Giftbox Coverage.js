function giftBox(array) {
let sizeOfSide = Number(array[0]);
let numberOfSheets = Number(array[1]);
let sheetCovers = Number(array[2]);
let percentageCovered = 0;
let boxArea = 6*(sizeOfSide*sizeOfSide);
let currentCovered = 0;
for (let i = 1; i <= numberOfSheets; i++) {
     if(i%3===0){
        currentCovered+= 0.25*sheetCovers;
     } else {
         currentCovered+=sheetCovers;
     }
    
}
percentageCovered= (1-((boxArea-currentCovered)/boxArea))*100
console.log(`You can cover ${percentageCovered.toFixed(2)}% of the box.`);

}
giftBox([ '5', '30', '4' ]);
giftBox(['2.5','32','4.25'])