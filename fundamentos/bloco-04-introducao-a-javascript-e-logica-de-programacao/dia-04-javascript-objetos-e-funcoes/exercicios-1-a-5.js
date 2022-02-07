let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda, ' + info.personagem);

console.log('');
info.recorrente = 'nao';

console.log(info);

console.log('');
for (let key in info) {
  console.log(key);
}

console.log('');
for (let key in info) {
  console.log(info[key]);
}


console.log('');

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Beat Mountain, Dell's Four Colo Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'nao',
};

for (let key in info) {
  if (key === 'recorrente') {
    if (info[key] === "sim" && info2[key] === "sim") {
      console.log("Ambos recorrentes");
    } else if (info[key] === "nao" && info2[key] === "nao") {
      console.log("Ambos não recorrentes");
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }
  }
  if (key != 'recorrente') {
    console.log(info[key] + ' e ' + info2[key]);
  }
}