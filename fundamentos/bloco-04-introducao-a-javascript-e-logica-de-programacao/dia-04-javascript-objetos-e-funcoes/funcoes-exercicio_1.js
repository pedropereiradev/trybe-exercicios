/*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */

function palindromo(word) {
  let palindromo;
  let str = word;
  // split - separa letra a letra devido ao ('')-> casa: c,a,s,a
  // reverse - inverte a ordem das letras -> c,a,s,a: a,s,a,c
  // join - junta as letras separadar devido ao ('') -> a,s,a,c: asac
  let strReverse = str.split('').reverse().join('');
  //console.log(str + ' ' + strReverse);
  if (str === strReverse) {
    palindromo = true;
  } else {
    palindromo = false;
  }
  console.log(palindromo);
}

palindromo('arara');
