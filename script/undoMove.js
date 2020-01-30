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
