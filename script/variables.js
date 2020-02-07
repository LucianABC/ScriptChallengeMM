let tileSize=100;
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
    4: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    
    1: {
      correctPosition: 0,
      currentPosition: 1,
      moveHistory:  [1]
    },
    

    empty: {
      correctPosition: 3,
      currentPosition: 3,
      moveHistory:  [3]
    }
}

const positionMap = [
  //1st row
  [  
    {
        y: 0,
        x:0,
        top: 0,
        left: 0
    },
    {
      y: 0,
      x:1,
      top: 0,
      left: -tileSize 
    },
    {
        y: 1,
        x:0,
        top: 0,
        left: -2*tileSize
    },
    {
        y: 1,
        x:1,
        top: 0,
        left: -3*tileSize

    }
  ],
  //2nd row
   [
      {
      y: 1,
      x:1,
      top: -tileSize,
      left: 0
    },
      
   {
      y: 1,
      x:1,
      top: -tileSize,
      left: -tileSize
    },
      
   {
      y: 1,
      x:1,
      top: -tileSize,
      left: -2*tileSize
    },
      
   {
      y: 1,
      x:1,
      top: -tileSize,
      left: -3*tileSize
    },
  ]
  //3rd row 
  [
   {
      y: 1,
      x:1,
      top: -2*tileSize,
      left: 0
    },
      
    {
      y: 1,
      x:1,
      top: -2*tileSize,
      left: -tileSize
    },
      
    {
      y: 1,
      x:1,
      top:-2*tileSize,
      left: -2*tileSize
    },
      
    {
      y: 1,
      x:1,
      top: tileSize,
      left: -3*tileSize
    },
  ],
  //4th row
  [  
    {
      y: 1,
      x:1,
      top: -3*tileSize,
      left: 0
    },
      
    {
      y: 1,
      x:1,
      top: -3*tileSize,
      left: -tileSize
    },
      
    {
      y: 1,
      x:1,
      top: -3*tileSize,
      left: -2*tileSize
    },
      
    {
      y: 1,
      x:1,
      top: -3*tileSize,
      left: -3* tileSize
    },
       
  ]
]

const movementMap = [
             //top
                [positionMap[0],positionMap[1]]
             //bot
                [positionMap[2],positionMap[3]]
];

