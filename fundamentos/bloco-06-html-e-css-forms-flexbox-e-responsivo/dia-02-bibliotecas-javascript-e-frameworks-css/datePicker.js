// https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/

document.getElementById("input-date").DatePickerX.init({
  mondayFirst: false,
  minDate: new Date(),
  format: "dd/mm/yyyy",
});
