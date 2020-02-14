
const deleteHistory = () => {
    piecesMoved = [];
    let keys = Object.keys(pieces);
    for (let key of keys ){
        pieces[key].positionHistory=[];
    }
}