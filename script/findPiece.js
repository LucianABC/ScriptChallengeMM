
const findPiecePosition = (pieceId) => {
  
    for (let y = 0; y < rows; ++y) {
      for (let x = 0; x < rows; ++x) {
        if (positionMap[y][x].id==pieceId) {
          return ({x:x,
                  y:y})
        }
      }
    }
}