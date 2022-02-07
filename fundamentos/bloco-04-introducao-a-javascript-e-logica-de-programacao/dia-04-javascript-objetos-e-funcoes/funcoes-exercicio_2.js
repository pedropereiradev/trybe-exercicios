function higherValue(value) {
  let higher = 0;
  let higherIndex;
  for (let index in value) {
    if (value[index] > higher) {
      higher = value[index];
      higherIndex = index;
    }
  }
  console.log(higherIndex);
}

higherValue([2, 3, 6, 7, 10, 1]);