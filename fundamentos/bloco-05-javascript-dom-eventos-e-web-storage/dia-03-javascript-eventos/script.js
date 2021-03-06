function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function monthCalendar(month) {
  const daysList = document.querySelector("#days");

  for (let i = 0; i < month.length; i += 1) {
    const monthDays = month[i];
    const monthListItem = document.createElement("li");
    monthListItem.innerText = monthDays;
    monthListItem.className = "day";

    // https://backefront.com.br/adicionar-classe-js-puro/
    if (monthDays === 24 || monthDays === 25 || monthDays === 31) {
      monthListItem.className += " holiday";
    }
    if (
      monthDays === 3 ||
      monthDays === 10 ||
      monthDays === 17 ||
      monthDays === 24 ||
      monthDays === 31
    ) {
      monthListItem.className += " friday";
    }

    daysList.appendChild(monthListItem);
  }
}

monthCalendar(dezDaysList);

function addButton(str, id) {
  let buttonsContainer = document.querySelector(".buttons-container")
  let button = document.createElement("button");
  button.innerText = str;
  button.id = id;
  buttonsContainer.appendChild(button);
}

addButton('Feriados', 'btn-holiday');

function addEventClickHoliday() {
  let button = document.querySelector("#btn-holiday");
  let holidays = document.querySelectorAll('.holiday');

  button.addEventListener("click", function () {
    for (let i = 0; i < holidays.length; i += 1) {
      // if-else retirado do comentário do Daniel Cardoso na thread da Daniella Zuccolotto
      if (holidays[i].style.backgroundColor === "rgb(135, 251, 135)") {
        holidays[i].style.backgroundColor = "rgb(238, 238, 238)";
      } else {
        holidays[i].style.backgroundColor = "rgb(135, 251, 135)";
      }
    }
  });
}

addEventClickHoliday();

addButton("Sexta-feira", "btn-friday");

function addEventClickFriday() {
  let button = document.querySelector("#btn-friday");
  let friday = document.querySelectorAll(".friday");

  button.addEventListener("click", function () {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].style.fontWeight === '700') {
        friday[i].style.fontWeight = "400";
      } else {
        friday[i].style.fontWeight = "700";
      }
    }
  });
}

addEventClickFriday();

 function zoomDay() {
  let days = document.querySelector("#days");
  
   days.addEventListener("mouseover", function (overEvent) {
     overEvent.target.style.cursor = "pointer";
    overEvent.target.style.fontSize = '25px';
  });
  days.addEventListener("mouseout", function (outEvent) {
    outEvent.target.style.fontSize = '';
  });
 }

zoomDay();

function addTask(toDoTask) {
  let myTasks = document.querySelector(".my-tasks");
  let newTask = document.createElement('span');
  myTasks.appendChild(newTask);
  newTask.innerText = toDoTask;
}

addTask('Estudar JavaScript');

function taskSubtitle(taskColor) {
  let myTasks = document.querySelector(".my-tasks");
  let newSubtitle = document.createElement('div');
  myTasks.appendChild(newSubtitle);
  newSubtitle.className = 'task';
  newSubtitle.style.backgroundColor = taskColor;
}

taskSubtitle('purple');

function selectTask() {
  let selectedTask = document.querySelector(".task")
  selectedTask.addEventListener('click', function (originEvent) {
    if (originEvent.target.className === "task selected") {
      originEvent.target.className = "task";
    } else {
      originEvent.target.className = "task selected";
    }
  });
}
selectTask();

function markTaskSelected() {
  let selectedDay = document.querySelector("#days");

  selectedDay.addEventListener("click", function (originEvent) {
    let task = document.querySelector(".task");
    let taskSelected = task.className;
    let taskColor = task.style.backgroundColor;

    if (taskSelected === 'task selected') {
      //console.log(originEvent.target);
      originEvent.target.style.color = taskColor;
    } else {
      originEvent.target.style.color = "rgb(119, 119, 119)";
    }
  });
}
markTaskSelected();

function commitmentFunction() {
  let commitment = document.querySelector("#task-input");
  let commitmentList = document.querySelector(".task-list")

  if (commitment.value === "") {
    alert("ERRO! Campo vazio.");
  } else {
    let newCommitment = document.createElement("li");
    commitmentList.appendChild(newCommitment);
    newCommitment.innerText = commitment.value;
    commitment.value = "";
  }
}

function addCommitment() {
  let commitmentButton = document.querySelector("#btn-add");
  let commitment = document.querySelector("#task-input");

  commitmentButton.addEventListener("click", commitmentFunction);
  // https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box?rq=1
  commitment.addEventListener("keyup", function (originEvent) {
    if (originEvent.keyCode === 13) {
      commitmentFunction();
    }
  });
}
addCommitment();