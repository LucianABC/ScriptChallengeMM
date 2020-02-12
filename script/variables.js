let tileSize=100;
let piecesMoved = []

let pieces = {
  //positionHistory : [[x,y],[x,y]...]
    1: {
      correctX: 0,
      correctY:0,
      currentY:  0,
      currentX:0,
      positionHistory:  []
    },
    2: {
      correctX: 0,
      correctY: 1,
      currentY:0,
      currentX:1,
      positionHistory:  []
        },
    3: {
      correctX: 0,
      correctY: 2,
      currentX:0,
      currentY:1,
      positionHistory: [] 
    },
    4: {
      correctX: 0,
      correctY: 3,
      currentX:0,
      currentY:3,
      positionHistory: []
    },
    
    5: {
      correctX: 1,
      correctY: 0,
      currentX: 1,
      currentY: 0,
      positionHistory: []
    },
    
    6: {
      correctX: 1,
      correctY: 1,
      currentX: 1,
      currentY: 1,
      positionHistory: []
    },
    
    7: {
      correctX: 1,
      correctY: 2,
      currentX:1,
      currentY:2,
      positionHistory: []
    },
    
    8: {
      correctX: 1,
      correctY: 3,
      currentX:1,
      currentY:3,
      positionHistory: []
    },
    
    9: {
      correctX: 2,
      correctY: 0,
      currentX:2,
      currentY:0,
      positionHistory: []
    },
    
    10: {
      correctX: 2,
      correctY: 1,
      currentX:2,
      currentY:1,
      positionHistory: []
    },
    
    11: {
      correctX: 2,
      correctY: 2,
      currentX:2,
      currentY:2,
      positionHistory: []
    },
    
    12: {
      correctX: 2,
      correctY: 3,
      currentX:2,
      currentY:3,
      positionHistory: []
    },
    
    13: {  
      correctX: 3,
      correctY: 0,
      currentX:3,
      currentY:0,
      positionHistory: []
    },
    
    14: {
      correctX: 3,
      correctY: 1,
      currentX: 3,
      currentY:1,
      positionHistory: []
    },
    
    15: {
      correctX: 3,
      correctY: 2,
      currentX:3,
      currentY:2,
      positionHistory: []
    },
    
    empty: {
      correctX: 3,
      correctY: 3,
      currentX:3,
      currentY:3,
      positionHistory: []
    }
}
