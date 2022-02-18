function biggerName(names) {
  let letterCount = 0;
  let bigger = '';

  /* for (let index in names) {
    for (let index2 in names){
      if (names[index].length > letterCount) {
        bigger = names[index];
        letterCount = index2;
      }
    }
  }
  console.log(bigger); */

  for (let index = 0; index < names.length; index += 1) {
    for (let index2 = 0; index2 < names.length; index2 += 1) {
      if (names[index].length > letterCount) {
        bigger = names[index];
        letterCount = index2;
      }
    }
  }
  console.log(bigger);
}

biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);