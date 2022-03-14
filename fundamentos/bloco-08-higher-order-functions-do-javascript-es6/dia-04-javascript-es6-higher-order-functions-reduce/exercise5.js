const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui
  const countLetterA = names.reduce((acc, curr, index, array) => {
    return acc + curr.match(/a/gi).length;
  }, 0);
  return countLetterA;
}

console.log(containsA());

// Aanemarie - 3
// Adervandes - 2
// Akifusa - 2
// Abegildo - 1
// Adicellia - 2
// Aladonata - 4
// Abeladerco - 2
// Adieidy - 1
// Alarucha - 3 -> total: 20