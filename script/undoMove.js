const undo = (pieceNum, move) => {
    pieces["empty"].currentPosition = pieces[pieceNum].currentPosition;
    pieces[pieceNum].currentPosition = pieces[pieceNum].moveHistory[move];
    movePiece(pieceNum);;
}

const restart = () => {
    for (let pieceMoved of piecesMoved) {
        undo(pieceMoved, 0);
        pieces[pieceMoved].moveHistory = [];
    }
}


const undoButton = document.querySelector("#undo-button");
undoButton.addEventListener("click",() =>{
    let lastPiece = piecesMoved[piecesMoved.length-1];
    let moveHistory = pieces[lastPiece].moveHistory;
    let lastMove = moveHistory.length-2;
    
    undo(lastPiece, lastMove);   
})