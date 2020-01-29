const shuffle = () =>{
    let keys = Object.keys(pieces);
    let randomNumbers = [];
   

    for (let key of keys) {
        let random = Math.floor(Math.random() * 4);
        let numberUsed= randomNumbers.includes(random);

        while (numberUsed){
            random = Math.floor(Math.random() * 4);
            numberUsed= randomNumbers.includes(random)
        }
        randomNumbers.push(random);

        pieces[key].currentPosition=random;
        movePiece(key,keys[random]);
    }
    console.log(randomNumbers);
}
