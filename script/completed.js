const isCompleted = () => {

    let completed = true;
    let keys = Object.keys(pieces);

    for (let y=0; y<rows; y++){
        for(let x=0; x<rows; x++){
            for (let key of keys) {
                if (!(pieces[key].correctX == x && pieces[key].correctY == y)){
                    completed = false;
                    return completed
                }
            }
        }
    }
  return completed
}

const puzzleCompleted = () => {
    if (isCompleted()) {
        let puzzle = document.querySelector(".puzzle");
        let puzzleImage= document.querySelector(".puzzle-background");
        puzzle.classList.add("fade-out");        
        puzzleImage.classList.add("fade-in") ;
    }
}

const reinitializePuzzle = () => {
    if(isCompleted){
        let puzzle = document.querySelector(".puzzle");
        let puzzleImage= document.querySelector(".puzzle-background");
        puzzle.classList.remove("fade-out");        
        puzzleImage.classList.remove("fade-in") ;
    }
}