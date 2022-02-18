const submitButton = document.querySelector('#send-button');

function eliminateSend(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', eliminateSend);