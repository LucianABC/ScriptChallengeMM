const isMovable = (tile) => {
    let tileNum = tile;
    let selectedPiece = pieces[tileNum];
    
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
    //Error if can't be moved
    if (!isMovable(pieceNum)) {
        return "This piece cannot be moved"
    } 
    //Change position
    let newPosition = pieces.empty.currentPosition;
    let oldPosition = pieces[pieceNum].currentPosition;
    pieces[pieceNum].currentPosition = newPosition;
    pieces.empty.currentPosition = oldPosition;

    //Move piece
    let DOMPiece = document.querySelector(`#piece-${pieceNum}`);
    for (let key of Object.keys(positionMap)){    
        if(newPosition==key){
            DOMPiece.style.top = `${positionMap[key].top}px`;
            DOMPiece.style.left= `${positionMap[key].left}px`;
        }   
    }
}

let DOMpieces = document.querySelectorAll(".puzzle-piece");

DOMpieces.forEach(piece => 
    piece.addEventListener("click",()=>{
        let pieceNumber = parseInt(piece.innerHTML);
        movePiece(pieceNumber);
    })
);