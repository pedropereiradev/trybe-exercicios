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
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
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
      monthDays === 4 ||
      monthDays === 11 ||
      monthDays === 18 ||
      monthDays === 25
    ) {
      monthListItem.className += " friday";
    }

    daysList.appendChild(monthListItem);
  }
}

monthCalendar(dezDaysList);

function addButton(str) {
  let buttonsContainer = document.querySelector(".buttons-container")
  let button = document.createElement("button");
  button.innerText = str;
  button.id = "btn-holiday";
  buttonsContainer.appendChild(button);
}

addButton('Feriados');

