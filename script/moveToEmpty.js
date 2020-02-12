const isMovable = (tile) => {
    let tileKey = tile;
    let emptySpace = pieces.empty;
    let emptyXposition = emptySpace.currentX;
    let emptyYposition= emptySpace.currentY;
    let movablePieces = [];

    let keys = Object.keys(pieces);
    
    for (let key of keys){
        if (emptyYposition+1 >= 0 && emptyYposition+1 <= 3){
            let x=emptyXposition;
            let y=emptyYposition+1;

            if (pieces[key].currentX == x && pieces[key].currentY == y) {
                movablePieces.push(key)
            }
        }
        if (emptyYposition-1 >= 0 && emptyYposition-1 <= 3){
            let x=emptyXposition;
            let y=emptyYposition+1;

            if (pieces[key].currentX == x && pieces[key].currentY == y) {
                movablePieces.push(key)
            }
        }
        if (emptyXposition+1 >= 0 && emptyXposition+1 <= 3){
            let x=emptyXposition+1;
            let y=emptyYposition;

            if (pieces[key].currentX == x && pieces[key].currentY == y) {
                movablePieces.push(key)
            }
        }
        if (emptyXposition-1 >= 0 && emptyXposition-1 <= 3){
            let x=emptyXposition-1;
            let y=emptyYposition;

            if (pieces[key].currentX == x && pieces[key].currentY == y) {
                movablePieces.push(key)
            }
        }

    }
    
    if (movablePieces.includes(tileKey)){
        return true
    }
};

const moveToEmptySlot = (pieceNum) => {   
    //Error if can't be moved
    if (!isMovable(pieceNum)) {
        return "This piece cannot be moved"
    }  

    //Change position with empty slot
    let emptyX = pieces[empty].currentX; 
    let emptyY =pieces[empty].currentY;

    movePiece(pieceNum, emptyX, emptyY);
}

let DOMpieces = document.querySelectorAll(".puzzle-piece");

DOMpieces.forEach(piece => 
    piece.addEventListener("click", async()=>{
        let pieceNumber = parseInt(piece.innerHTML);
            await moveToEmptySlot(pieceNumber);
            await puzzleCompleted();
    })
);