function DNA(number) {

    let dna = ['A','T','C','G','T','T','A','G','G','G'];

    for (let i = 0; i < number; i++) {
       for (let j = 0; j <=i; j++) {
           if(i===0){
               console.log(`**${dna[j]}${dna[j+1]}**`);
               dna.pop(dna[j]);
               dna.pop(dna[j+1]);
           }
           if(i===1){
               console.log(`**${dna[j]}${dna[j+1]}**`);
               
           }
           
       }
        
    }
}
DNA(4)
// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*
