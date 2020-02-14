
const shuffle = () =>{
    
    let piecesKeys = Object.keys(pieces);
    let piecesUsed = [];
    let positions = rows * rows ; 
    let piecesQuant = positions-1;
    
    for (let y = 0; y<rows; y++) {
        for (let x = 0; x<rows; x++){
            
            let randomIdx= Math.floor(Math.random() * positions);

            //Check piece hadn't already been asigned a position
            while (piecesUsed.includes(randomIdx)){
                randomIdx= Math.floor(Math.random() * positions);
            }
            piecesUsed.push(randomIdx);
            pieceKey = piecesKeys[randomIdx];        
             
            movePiece(pieceKey, x, y);
        }
    }
    //If puzzle not solvable, swap first two pieces.
    let solvable = isSolvable();
    console.log(solvable)
    if(!solvable){
        let piece1 = positionMap[0][0].id;
        let piece2 = positionMap[0][1].id;
        movePiece(piece1,1,0);
        movePiece(piece2,0,0);
        console.log(piece1, piece2)
        //if (positionMap[0][0]==pieces["empty"] || positionMap[0][1]==pieces["empty"]){
          //  swapTiles(tileCount - 2, tileCount - 1, tileCount - 1, tileCount - 1);
       // } else {
         // }
    }
     let solvable2 =isSolvable();
     console.log("Es resoluble", solvable2)
    deleteHistory();
}

const shuffleButton = document.querySelector("#shuffle-button");
shuffleButton.addEventListener("click", shuffle);