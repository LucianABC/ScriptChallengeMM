
const undo = () => {
    let lastPieceMoved = piecesMoved[piecesMoved.length-1];
    moveToEmptySlot(lastPieceMoved);
    piecesMoved.splice(-2);
}
//Undo last move
const undoButton = document.querySelector("#undo-button");
undoButton.addEventListener("click", undo);

//Restart puzzle
const restartPuzzle = () => {
  let length = piecesMoved.length;
  for (let i = 0; i<length; i++){
    undo();
  }
}

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartPuzzle);