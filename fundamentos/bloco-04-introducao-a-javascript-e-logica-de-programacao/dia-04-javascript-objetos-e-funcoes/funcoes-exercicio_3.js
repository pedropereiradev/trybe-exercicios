function lowerValue(value) {
  let lower = Infinity;
  let lowerIndex;
  
  for (index in value) {
    if (value[index] < lower) {
      lower = value[index];
      lowerIndex = index;
    }
  }
  console.log(lowerIndex);
}

lowerValue([2, 4, 6, 7, 10, 0, -3]);