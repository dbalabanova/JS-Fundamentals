function cardGame(array) {
let game = new Map ();
let finalGame = new Map();
let leftCards = [] ;
let sum = 0;
array
.forEach((line)=>{
let[name,cards] = line.split(': ');

if(game.has(name)){
    let add = game.get(name) + ', '+ cards;
    game.set(name,add)
} else {
    game.set(name,cards)
}
});
let entries = [...game.entries()]

for (let k = 0; k < entries.length; k++) {
    let current= entries[k];
    let[currentplayer,cards] = current
    cards = cards.split(', ');
    leftCards = [];
for (let j = 0; j < cards.length; j++) {
   if(leftCards.indexOf(cards[j])===-1) {
       leftCards.push(cards[j]);
   }
}
sum = 0;
   
   for (let l = 0; l < leftCards.length; l++) {
    let current = leftCards[l].split(', ');
    
         for (let m = 0; m < current.length; m++) {
             let arr = [...current[m]];
             let secondSymbol=arr.pop();
             let firstSymbol = arr;
             if(firstSymbol.length===2) firstSymbol=10;
             else {
            if(firstSymbol[0]==='J') firstSymbol=11;
            else if(firstSymbol[0]==='Q') firstSymbol=12;
            else if(firstSymbol[0]==='K') firstSymbol=13;
            else if(firstSymbol[0]==='A') firstSymbol=14;
            else firstSymbol[0]=Number(firstSymbol);
             }
            if(secondSymbol==='S') secondSymbol=4;
            else if(secondSymbol==='H') secondSymbol=3;
            else if(secondSymbol==='D') secondSymbol=2;
            else if(secondSymbol==='C') secondSymbol=1;
     
            sum+=(firstSymbol*secondSymbol);  
         }
   }
   
   finalGame.set(currentplayer,sum)  

  
  
}
let output = [...finalGame.entries()]
.forEach(([name,points])=>{
console.log(`${name}: ${points}`);

})

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )