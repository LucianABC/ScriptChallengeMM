
const movePiece = (pieceNum) => {
    //Add move to history
    pieces[pieceNum].moveHistory.push(pieces[pieceNum].currentPosition);
    piecesMoved.push(pieceNum);

    //Move piece
    piece = pieces[pieceNum];
    let DOMPiece = document.querySelector(`#piece-${pieceNum}`);    
    for (let key of Object.keys(positionMap)){    
        if(piece.currentPosition==key){
            DOMPiece.style.top = `${positionMap[key].top}px`;
            DOMPiece.style.left= `${positionMap[key].left}px`;
        }   
    }
}
