function chessBoard(n) {
  let currentColor = "black";
  let previousColor = '';
  console.log('<div class="chessboard">');
  
  for (let rows = 0; rows < n; rows++) {
    console.log(' <div>');
    
    for(let columns =0; columns <n; columns++){
      console.log(`   <span class="${currentColor}"></span>`);
      previousColor=currentColor;
      currentColor = previousColor==="black"? "white" :"black"
    }
    console.log(' </div>');
     if (n%2===0){
      currentColor = previousColor==="black"? "black" :"white"
       
     }
  }
  console.log(' </div>');
  
}
chessBoard(4)