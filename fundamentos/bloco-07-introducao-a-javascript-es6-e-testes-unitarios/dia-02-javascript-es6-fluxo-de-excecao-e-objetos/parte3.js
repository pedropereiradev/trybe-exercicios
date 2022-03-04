const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function addNewValue(obj, key, value) {
  obj[key] = value;
}

addNewValue(lesson2, "turno", "noite");

function keyList(obj) {
  console.log(Object.keys(obj));
}

keyList(lesson1);


console.log(lesson2);