const isCompleted = () => {

    let completed = true;
    

    for (let y=0; y<rows; y++){
        for(let x=0; x<rows; x++){
          if (positionMap[y][x].correctX !== x || positionMap[y][x].correctY!==y){
            completed = false;
            
            console.log (positionMap[y][x], x, y)
            return completed
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