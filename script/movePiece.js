
const movePiece = (pieceKey, newX, newY) => {
    //Add old position to history
    let piece = pieces[pieceKey];
    piece.positionHistory.push([newX,newY]);
    
    //Move DOM piece
    if (pieceKey !== "empty"){        
        let DOMpiece = document.querySelector(`#piece-${pieceKey}`);
        DOMpiece.style.top = `${movementMap[newY][newX].top}px`; 
        DOMpiece.style.left =`${movementMap[newY][newX].left}px`;
        piecesMoved.push(pieceKey);
    } 

    //Refresh current position in the map
    positionMap[newY][newX] = piece;

}
