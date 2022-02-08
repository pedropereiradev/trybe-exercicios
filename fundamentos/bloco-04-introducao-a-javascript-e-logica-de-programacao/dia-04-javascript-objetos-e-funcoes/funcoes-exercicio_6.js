function somatory(num) {
  let soma = 0;
  let expression = '';
  for (index = 0; index <= num; index += 1) {
    soma += index;
    if (index < num && index > 0) {
      expression += index + '+';
    } else if(index === num){
      expression += index + ' =';
    }
  }
  console.log(expression, soma);
}

somatory(10);