
const movePiece = (pieceKey, newX, newY) => {
    //Add old position to history
    let piece = pieces[pieceKey];
    piece.positionHistory.push([piece.currentX,piece.currentY]);
    piecesMoved.push(pieceNum);

    //Move DOM piece
    if (pieceKey !== "empty"){        
        let DOMpiece = document.querySelector(`#piece-${pieceKey}`);
        DOMpiece.style.top = `${positionMap[newY][newX].top}px`; 
        DOMpiece.style.left =`${positionMap[newY][newX].left}px`;
    }

    //Refresh current position
    piece.currentX=newX;
    piece.currentY=newY;
}
