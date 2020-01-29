const puzzle = document.querySelector(".puzzle");
let tileSize=200;

let pieces = {
    1: {
      correctPosition: 1,
      currentPosition: 0,
      top: 0,
      left: 0
    },
    2: {
      correctPosition: 2,
      currentPosition: 1,
      top: 0,
      left: tileSize 
    },
    3: {
      correctPosition: 3,
      currentPosition: 2,
      top: tileSize,
      left: 0
    },
    empty: {
      correctPosition: 4,
      currentPosition: 3,
      top: tileSize,
      left: tileSize
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
    let selectedPiece = pieces[tile];
    let emptySpace = pieces.empty;
    let movablePieces = [];

    switch (emptySpace.position){
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

    if (movablePieces.includes(selectedPiece.position)){
        return true
    } else {
        return false
    }
};

const movePiece = (pieceNum) => {
    let emptySlotPosition = pieces.empty.position;
    let currentPiece = pieces[pieceNum];
    let piecePosition = currentPiece.position;
    let DOMPiece = document.querySelector(`#piece-${pieceNum}`);

    if (isMovable(pieceNum)){
        currentPiece.position = emptySlotPosition;
        pieces.empty.position = piecePosition;
    
        for (let key of positionMap.keys){
            if(currentPiece.position==key){
                DOMPiece.style.top = positionMap[key].top;
                DOMPiece.style.left= positionMap[key].left;
            }   
        }
    }
}

