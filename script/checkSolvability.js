const calcInversions=(pieceNum, pieceX,pieceY)=>{
    let inversions = 0;
    let lastTile = rows * rows;
    let position = positionMap[pieceY][pieceX];
    let positionNumber = pieceY*rows+pieceX;
    
    //Recorre el las posiciones x sus respectivos numeros a partir de la currentposition
    for (let i = positionNumber + 1; i < lastTile; ++i) {
      //Calculates the coordinates of the next piece
      let y = i % rows;
      let x = Math.floor(i / rows);
  
      let compValue = positionMap[y][x].id;
      if ((pieceNum > compValue) && (pieceNum != lastTile-1)) {
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
        if(pieceNum != "empty"){
          inversions += calcInversions(pieceNum, x, y);
        }
      }
    }
    return inversions;
};

//"If the grid width is even, and the blank is on an even row counting from the bottom 
//then the number of inversions in a solvable situation is odd."
//"If the grid width is even, and the blank is on an odd row counting from the bottom 
//then the number of inversions in a solvable situation is even."

const isSolvable=()=> {
  let inversions = totalInversions();
  let position =findPiecePosition("empty");
  let emptyRow =position.y;
  let solvable;
  
  if ((inversions % 2 == 0) && (emptyRow ==1 || emptyRow==3)){
      solvable = true;
  } else if ((inversions % 2 !== 0) &&(emptyRow ==2 || emptyRow==0)){
    solvable = true;
  } else {
    solvable = false;
  }    
    return solvable
}