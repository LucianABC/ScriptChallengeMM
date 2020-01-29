const isMovable = (tile) => {
   
    let tileKey = tile;
    let selectedPiece = pieces[tileKey];
    
    let emptySpace = pieces.empty;
    let movablePieces = [];

    //Check which pieces are available to move
    switch (emptySpace.currentPosition){
        case 0:
            movablePieces = [1,2]
        break
        
        case 1:
            movablePieces = [0,3]
        break
        
        case 2:
            movablePieces = [0,3]
        break
        
        case 3:
            movablePieces = [1,2]
        break
    }
    
    //Can the piece be moved?
    if (movablePieces.includes(selectedPiece.currentPosition)){
        return true
    } else {
        return false
    }
};

const movePiece = (pieceNum) => {
    //Move piece
    let DOMPiece = document.querySelector(`#piece-${pieceNum}`);
    piece = pieces[pieceNum];
    for (let key of Object.keys(positionMap)){    
        if(piece.currentPosition==key){
            DOMPiece.style.top = `${positionMap[key].top}px`;
            DOMPiece.style.left= `${positionMap[key].left}px`;
        }   
    }
}

const moveToEmptySlot = (pieceNum) => {   
    //Error if can't be moved
    if (!isMovable(pieceNum)) {
        return "This piece cannot be moved"
    }  

    //Change position
    let newPosition = pieces["empty"].currentPosition;//pieces[2] 2
    let oldPosition = pieces[pieceNum].currentPosition;
    pieces[pieceNum].currentPosition = newPosition;
    pieces["empty"].currentPosition = oldPosition;

    movePiece(pieceNum);
}




let DOMpieces = document.querySelectorAll(".puzzle-piece");

DOMpieces.forEach(piece => 
    piece.addEventListener("click", async()=>{
        let pieceNumber = parseInt(piece.innerHTML);
        
        
            await moveToEmptySlot(pieceNumber);
            await puzzleCompleted();
       
        
    })
);