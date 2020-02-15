
const shuffle = () =>{
    let piecesKeys = Object.keys(pieces);
    let piecesUsed = [];
    let positions = rows * rows ; 
    
    for (let y = 0; y<rows; y++) {
        for (let x = 0; x<rows; x++){
            
            let randomIdx= Math.floor(Math.random() * positions);
            //Check if piece hasn't already have an asigned position
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
    if(solvable==false){
       shuffle();
    }

    piecesMoved=[];
}

const shuffleButton = document.querySelector("#shuffle-button");
shuffleButton.addEventListener("click", shuffle);

shuffle();