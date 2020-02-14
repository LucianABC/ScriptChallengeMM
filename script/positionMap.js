let tileSize=100;

let positionMap = [
  //1st row
  [pieces[1],pieces[2], pieces[3], pieces[4] ],
  //2nd row
  [pieces[5],pieces[6], pieces[7], pieces[8] ],
  //3rd row
  [pieces[9],pieces[10], pieces[11], pieces[12] ],
  //4th row
  [pieces[13],pieces[14], pieces[15], pieces["empty"] ]
]

const movementMap = [
  //1st row
  [  
    {top:0,left:0},{top:0,left:tileSize},{top:0,left:2*tileSize},{top:0,left: 3*tileSize}
  ],
  //2nd row
  [
    {top:tileSize, left: 0},{top:tileSize, left:tileSize}, {top:tileSize, left:2*tileSize},{top:tileSize, left:3*tileSize}
  ],
  //3rd row 
  [
    {top: 2*tileSize,left: 0}, {top: 2*tileSize,left: tileSize},{top:2*tileSize, left: 2*tileSize}, {top: 2*tileSize,left: 3*tileSize}
  ],
  //4th row
  [  
    {top: 3*tileSize, left: 0}, {top: 3*tileSize, left: tileSize},{top: 3*tileSize,left: 2*tileSize},{top: 3*tileSize,left: 3* tileSize}
  ]
]
