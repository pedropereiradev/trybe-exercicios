const submitButton = document.querySelector('#send-button');

function eliminateSend(event) {
  const pictureAllow = document.querySelector("#check-opt2");

  if (pictureAllow.checked) {
    submitButton.submit();
  } else {
    event.preventDefault();
  }
}

submitButton.addEventListener('click', eliminateSend);

const nome = document.querySelector("#input-name");


/* const commentArea = document.getElementById("comment-area");
commentArea.addEventListener('keypress', () => {
  let textLength = commentArea;
  console.log(textLength);
}); */