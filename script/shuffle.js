
const shuffle = () =>{
    
    reinitializePuzzle();
    
    let piecesKeys = Object.keys(pieces);
    let positionsUsed = [];
    let positionKeys = Object.keys(positionMap);

    for (let key of piecesKeys) {
        let randomNum= Math.floor(Math.random() * positionKeys.length);
        //Check position hasn't already been asigned
        while (positionsUsed.includes(randomNum)){
            randomNum= Math.floor(Math.random() * positionKeys.length);
        }
        positionsUsed.push(randomNum);

        pieces[key].currentPosition = randomNum;
        pieces[key].moveHistory=[randomNum];

        if (key !== "empty"){
            movePiece(key);
        }
    }
    piecesMoved = [];
}


const shuffleButton = document.querySelector("#shuffle-button");
shuffleButton.addEventListener("click", shuffle);