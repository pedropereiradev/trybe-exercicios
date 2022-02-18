const submitButton = document.querySelector('#send-button');
const pictureAllow = document.querySelector('#check-opt2');

function eliminateSend(event) {
  if (pictureAllow.checked) {
    submitButton.submit();
  } else {
    event.preventDefault();
  }
}

submitButton.addEventListener('click', eliminateSend);