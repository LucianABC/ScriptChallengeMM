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
    console.log("entra")
    if (!isMovable(pieceNum)) {
        console.log("inmovible")
        return "This piece cannot be moved"
    }  
    let emptyX;
    let emptyY;
    let pieceX;
    let pieceY;
    //Look where are the pieces located
    for (let x = 0; x<rows; x++){
        for (let y=0; y<rows; y++){
            if (positionMap[y][x].id=="empty"){
                emptyX = x;
                emptyY= y;
            } else if (positionMap[y][x].id==pieceNum){
                pieceX = x;
                pieceY = y;
            }
        }
    }
    console.log(emptyX,emptyY, pieceX,pieceY)
    //Swap position with empty slot
    movePiece("empty",pieceX, pieceY);
    movePiece(pieceNum, emptyX, emptyY);
}

let DOMpieces = document.querySelectorAll(".puzzle-piece");

DOMpieces.forEach(piece => 
    piece.addEventListener("click", ()=>{
        let pieceNumber = parseInt(piece.innerHTML);
            moveToEmptySlot(pieceNumber);
            puzzleCompleted();
    })
);