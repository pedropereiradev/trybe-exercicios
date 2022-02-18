function checkEnding(word, ending) {
  let check;
  let countEqual = 0;
  tamWord = word.length - 1;
  tamEnd = ending.length - 1;
  checkTam = word.length - ending.length;

  for (let index = tamWord; index >= checkTam; index -= 1) {
    if (word[index] === ending[tamEnd]) {
      countEqual += 1;
    }
    tamEnd -= 1;
  }
  if (countEqual === ending.length && countEqual != 0) {
    check = true;
  } else {
    check = false;
  }

  console.log(check);
}

checkEnding('joaofernando', 'fernan');