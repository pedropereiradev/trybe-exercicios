function mostRepeated(value) {
  let countRepeat = 0;
  let mostRepeat = 0;
  let repeatedValue;
  for (let index = 0; index <= value.length; index += 1) {
    for (let index2 = 0; index2 < value.length; index2 += 1) {
      if (value[index] === value[index2]) {
        countRepeat += 1;
      }
      if (countRepeat > mostRepeat) {
        mostRepeat = countRepeat;
        repeatedValue = value[index];
      }
    }
    countRepeat = 0;
  }
  console.log(repeatedValue);
}

mostRepeated([2, 3, 2, 5, 8, 2, 3]);