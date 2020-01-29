const isCompleted = () => {

    let completed = true;
    let keys = Object.keys(pieces);

  for (let key of keys) {
        if (!(pieces[key].currentPosition == pieces[key].correctPosition)){
            completed = false;
            return completed
        }
  }
  return completed

}

