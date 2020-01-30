const undo = (pieceNum, move) => {
    pieces["empty"].currentPosition = pieces[pieceNum].currentPosition;
    pieces[pieceNum].currentPosition = pieces[pieceNum].moveHistory[move];
    movePiece(pieceNum);
}

const blah = () => {
    let piecesKeys = Object.keys(pieces);
    for (let key of piecesKeys) {
      if (key !== "empty"){
        undo(key, 0);
      } 
    }
    piecesMoved = []
}


const undoButton = document.querySelector("#undo-button");
undoButton.addEventListener("click",() =>{
    let lastPiece = piecesMoved[piecesMoved.length-1];
    let moveHistory = pieces[lastPiece].moveHistory;
    let lastMove = moveHistory.length-2;
    
    undo(lastPiece, lastMove);   
})


const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", blah);