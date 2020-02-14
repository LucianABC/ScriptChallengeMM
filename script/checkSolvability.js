let rows = positionMap.length;

const calcInversions=(pieceNum, x,y)=>{
    let inversions = 0;
    let lastTile = rows * rows;
    let position = positionMap[y][x];
    let positionNumber = y*rows+x;
    
    //Recorre el las posiciones x ssu respectivos numeros a partir de la current
    for (let i = positionNumber + 1; i < lastTile; ++i) {
      let k = i % rows;
      let l = Math.floor(i / rows);
  
      let compValue = positionMap[k][l].id;
      if (pieceNum > compValue && pieceNum != (lastTile - 1)) {
        ++inversions;
      }
    }
    return inversions
};

const totalInversions=()=>{
    let inversions = 0;
    for (let y = 0; y < rows; ++y) {
      for (let x = 0; x < rows; ++x) {
        let pieceNum = positionMap[y][x].id;
        inversions += calcInversions(pieceNum, x, y);
      }
    }
    return inversions;
};

const isSolvable=()=> {
    let inversions = totalInversions();
    let isEven  = inversions % 2 == 0;
    console.log("Es par", isEven)
    return isEven
}
