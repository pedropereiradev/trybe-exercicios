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
  console.log(obj);
}

addNewValue(lesson2, "turno", "noite");

function keyList(obj) {
  console.log(Object.keys(obj));
}

keyList(lesson1);

function objectLength(obj) {
  const objLength = Object.keys(obj);
  console.log(objLength.length);
}

objectLength(lesson3);

function valuesList(obj) {
  console.log(Object.values(obj));
}

valuesList(lesson3);

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

console.log(allLessons);


function numberOfStudents() {
  const lessons = Object.keys(allLessons);
  let studentsCount = 0;
  
  for (let i = 0; i < lessons.length; i += 1) {
    studentsCount += allLessons[lessons[i]].numeroEstudantes;
  }
  console.log(studentsCount);
}

numberOfStudents();

function getValueByNumber(lesson, position) {
  const keyValue = Object.keys(lesson);
  console.log(lesson[keyValue[position]]);
}

getValueByNumber(lesson2, 0);

function verifyPair(lesson, key, value) {
  const lessonKey = Object.keys(lesson);
  const lessonValue = Object.values(lesson);
  
  if (lessonKey.includes(key) && lesson[key] === value) {
    return true;
  }
  return false
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// BONUS

function mathStudents() {
  const lessons = Object.keys(allLessons);
  let mathStudents = 0;

  for (let i = 0; i < lessons.length; i += 1) {
    if (allLessons[lessons[i]].materia === 'Matemática') {
      mathStudents += allLessons[lessons[i]].numeroEstudantes;
    }
  }
  console.log(mathStudents);
  }

mathStudents();

