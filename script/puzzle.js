const puzzle = document.querySelector(".puzzle");
let tileSize=200;

let pieces = {
    1: {
      correctPosition: 0,
      currentPosition: 0,
    },
    2: {
      correctPosition: 1,
      currentPosition: 1,
    },
    3: {
      correctPosition: 2,
      currentPosition: 2,
 
    },
    empty: {
      correctPosition: 3,
      currentPosition: 3,
    }
}

const positionMap = {
    0: {
        y: 0,
        x:0,
        top: 0,
        left: 0
    },
    1: {
        y: 0,
        x:1,
        top: 0,
        left: tileSize 
    },
    2: {
        y: 1,
        x:0,
        top: tileSize,
        left: 0
    },
    3: {
        y: 1,
        x:1,
        top: tileSize,
        left: tileSize
    } 
}

const movementMap = [
             //top
                [positionMap[0],positionMap[1]]
             //bot
                [positionMap[2],positionMap[3]]
];


const isMovable = (tile) => {
    let tileNum = tile;
    let selectedPiece = pieces[tileNum];
    
    let emptySpace = pieces.empty;
    let movablePieces = [];

    switch (emptySpace.currentPosition){
        case 0:
            movablePieces = [1,2]
        break
        
        case 1:
            movablePieces = [0,3]
        break
        
        case 2:
            movablePieces = [0,3]
        break
        
        case 3:
            movablePieces = [1,2]
        break
    }

    if (movablePieces.includes(selectedPiece.currentPosition)){
        return true
    } else {
        return false
    }
};

const movePiece = (pieceNum) => {   
    let DOMPiece = document.querySelector(`#piece-${pieceNum}`);
    let newPosition = pieces.empty.currentPosition;
    let oldPosition = pieces[pieceNum].currentPosition;

    if (!isMovable(pieceNum)) {
        return "This piece cannot be moved"
    } 

    pieces[pieceNum].currentPosition = newPosition;
    pieces.empty.currentPosition = oldPosition;

    for (let key of Object.keys(positionMap)){
        
        if(newPosition==key){
            DOMPiece.style.top = `${positionMap[key].top}px`;
            DOMPiece.style.left= `${positionMap[key].left}px`;
        }   
    }

}

