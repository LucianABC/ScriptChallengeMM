
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
