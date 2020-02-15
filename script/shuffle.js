
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
    //If puzzle not solvable, re-shuffle 
    let solvable = isSolvable();
    console.log(solvable)
    if(solvable==false){
       shuffle();
    }
    
    deleteHistory();
}

const shuffleButton = document.querySelector("#shuffle-button");
shuffleButton.addEventListener("click", shuffle);