
const undo = (pieceNum, move) => {
    pieces["empty"].currentPosition = pieces[pieceNum].currentPosition;
    pieces[pieceNum].currentPosition = pieces[pieceNum].moveHistory[move];
    movePiece(pieceNum);
}

const undoButton = document.querySelector("#undo-button");

//Undo last move
undoButton.addEventListener("click",() =>{
    let lastPiece = piecesMoved[piecesMoved.length-1];
    let moveHistory = pieces[lastPiece].moveHistory;
    let lastMove = moveHistory.length-2;
    
    undo(lastPiece, lastMove);   
})

//Restart puzzle
const restartPuzzle = () => {
    reinitializePuzzle();
    let piecesKeys = Object.keys(pieces);
    for (let key of piecesKeys) {
      if (key !== "empty"){
        undo(key, 0);
      } 
    }
    piecesMoved = [];
}

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartPuzzle);