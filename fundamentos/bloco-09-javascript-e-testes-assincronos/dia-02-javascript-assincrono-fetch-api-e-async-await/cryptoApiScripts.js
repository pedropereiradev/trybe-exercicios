const criptosList = (data) => {
  const criptos = document.querySelector('#criptos');
  console.log(data);
  for (let i = 0; i <= data.length; i += 1) {
    const coin = document.createElement('li');
    coin.innerText = `${data[i].name} (${data[i].symbol}): $ ${data[i].priceUsd}`;
    criptos.appendChild(coin);
  }
}

const fetchCriptos = (coin = '') => {
  fetch(`https://api.coincap.io/v2/assets/${coin}`)
    .then((response) => response.json())
    .then((data) => criptosList(data.data))
}

fetchCriptos();