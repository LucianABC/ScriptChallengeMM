
const shuffle = () =>{
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

        if (key == "empty"){
            pieces["empty"].currentPosition=randomNum;
            return
        }

        pieces[key].currentPosition = randomNum;
        movePiece(key);
    }
}


const shuffleButton = document.querySelector("#shuffle-button");
shuffleButton.addEventListener("click", shuffle);