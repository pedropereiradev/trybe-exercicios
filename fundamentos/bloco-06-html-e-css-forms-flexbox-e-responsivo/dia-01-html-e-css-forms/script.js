const submitButton = document.querySelector('#send-button');
const pictureAllow = document.querySelector('#check-opt2');

function eliminateSend(event) {
  if (pictureAllow.checked) {
    submitButton.submit();
  } else {
    window.alert("Necessário concordar com a divulgação de imagens");
    event.preventDefault();
  }
}

submitButton.addEventListener('click', eliminateSend);