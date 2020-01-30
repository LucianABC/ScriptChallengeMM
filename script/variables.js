let tileSize=200;
let piecesMoved = []
let pieces = {
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    2: {
      correctPosition: 1,
      currentPosition: 2,
      moveHistory:  [2]
    },
    3: {
      correctPosition: 2,
      currentPosition: 0,
      moveHistory:  [0]
 
    },
    empty: {
      correctPosition: 3,
      currentPosition: 3,
      moveHistory:  [3]
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

