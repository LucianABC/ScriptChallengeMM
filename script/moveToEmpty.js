const isMovable = (pieceNum) => {
    let movablePieces = [];
    //Find empty slot position
    let emptyPosition = findPiecePosition("empty")
  
    //Check which positions can be moved and push them into the array
    if (emptyPosition.y+1 >= 0 && emptyPosition.y+1 <= 3){
        let x=emptyPosition.x;
        let y=emptyPosition.y+1;
        movablePieces.push(positionMap[y][x].id);
    }
    if (emptyPosition.y-1 >= 0 && emptyPosition.y-1 <= 3){
        let x=emptyPosition.x;
        let y=emptyPosition.y-1;
        movablePieces.push(positionMap[y][x].id);  
    }
    if (emptyPosition.x+1 >= 0 && emptyPosition.x+1 <= 3){
        let x=emptyPosition.x+1;
        let y=emptyPosition.y;
        movablePieces.push(positionMap[y][x].id); 
    }
    if (emptyPosition.x-1 >= 0 && emptyPosition.x-1 <= 3){
        let x=emptyPosition.x-1;
        let y=emptyPosition.y;
        movablePieces.push(positionMap[y][x].id); 
    }
   //Check if the piece is movable
    if (movablePieces.includes(pieceNum)){
        return true
    }
};

const moveToEmptySlot = (pieceNum) => {   
    //Error if can't be moved
    if (!isMovable(pieceNum)) {
        return "This piece cannot be moved"
    }  
    //Look where are the pieces located
    let emptyPos = findPiecePosition("empty");
    let piecePos= findPiecePosition(pieceNum);
    //Swap position with empty slot
    movePiece("empty",piecePos.x, piecePos.y);
    movePiece(pieceNum, emptyPos.x, emptyPos.y);
}

let DOMpieces = document.querySelectorAll(".puzzle-piece");
DOMpieces.forEach(piece => 
    piece.addEventListener("click", ()=>{
        let pieceNumber = parseInt(piece.innerHTML);
            moveToEmptySlot(pieceNumber);
            puzzleCompleted();
    })
);