let salary = 3000;
let inssTaxes, irTaxes, finalSalary;

//INSS
if (salary > 5189.82) {
  inssTaxes = 570.88;
} else if (salary >= 2594.93 && salary <= 5189.82) {
  inssTaxes = salary * 0.11;
} else if (salary >= 1556.95 && salary <= 2594.92) {
  inssTaxes = salary * 0.09;
} else if (salary <= 1556.94) {
  inssTaxes = salary * 0.08;
}

finalSalary = salary - inssTaxes;

//IR
if (finalSalary > 4664.68) {
  irTaxes = finalSalary * 0.275 - 869.36;
} else if (finalSalary >= 3751.06 && finalSalary <= 4664.68) {
  irTaxes = finalSalary * 0.225 - 636.13;
} else if (finalSalary >= 2826.66 && finalSalary <= 3751.05) {
  irTaxes = finalSalary * 0.15 - 354.8;
} else if (finalSalary >= 1903.99 && finalSalary <= 2826.05) {
  irTaxes = finalSalary * 0.075 - 142.8;
} else {
    irTaxes = 0;
}

finalSalary = finalSalary - irTaxes;

console.log("Salário líquido no valor de",finalSalary,"reais.");