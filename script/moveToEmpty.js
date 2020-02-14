const isMovable = (pieceNum) => {
    let emptyXposition;
    let emptyYposition;
    let movablePieces = [];

    //Find empty slot position
    for (let y = 0; y < rows; y++) {
        for (let x =0; x<rows; x++){
            if (positionMap[y][x].id =="empty"){
                
            emptyXposition = x;
            emptyYposition = y;
            }
        }
    }    
    //Check which positions can be moved and push them into the array
    if (emptyYposition+1 >= 0 && emptyYposition+1 <= 3){
        let x=emptyXposition;
        let y=emptyYposition+1;
        movablePieces.push(positionMap[y][x].id);
      
    }
    if (emptyYposition-1 >= 0 && emptyYposition-1 <= 3){
        let x=emptyXposition;
        let y=emptyYposition-1;
        movablePieces.push(positionMap[y][x].id);  
     }
    if (emptyXposition+1 >= 0 && emptyXposition+1 <= 3){
        let x=emptyXposition+1;
        let y=emptyYposition;
        movablePieces.push(positionMap[y][x].id); 
    }
    if (emptyXposition-1 >= 0 && emptyXposition-1 <= 3){
        let x=emptyXposition-1;
        let y=emptyYposition;
        
        movablePieces.push(positionMap[y][x].id); console.log(positionMap[y][x].id);
    }
   //Check if the piece is movable
    if (movablePieces.includes(pieceNum)){
        return true
    }
};

const moveToEmptySlot = (pieceNum) => {   
    //Error if can't be moved
    if (!isMovable(pieceNum)) {
        return "This piece cannot be moved"
    }  
    let emptyX;
    let emptyY;
    let pieceX;
    let pieceY;
    //Look where are the pieces located
    for (let x = 0; x<rows; x++){
        for (let y=0; y<rows; y++){
            if (positionMap[y][x].id=="empty"){
                emptyX = x;
                emptyY= y;
            } else if (positionMap[y][x].id==pieceNum){
                pieceX = x;
                pieceY = y;
            }
        }
    }
    //Swap position with empty slot
    movePiece("empty",pieceX, pieceY);
    movePiece(pieceNum, emptyX, emptyY);
}

let DOMpieces = document.querySelectorAll(".puzzle-piece");

DOMpieces.forEach(piece => 
    piece.addEventListener("click", ()=>{
        let pieceNumber = parseInt(piece.innerHTML);
            moveToEmptySlot(pieceNumber);
            puzzleCompleted();
    })
);