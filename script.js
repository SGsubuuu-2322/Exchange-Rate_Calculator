const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

function calculate() {
  const currencyOneElValue = currencyOneEl.value;
  const currencyTwoElValue = currencyTwoEl.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/8f4dda0e6e6905cb5f1b1000/latest/${currencyOneElValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencyTwoElValue];

      rateEl.innerText = `1 ${currencyOneElValue} = ${rate} ${currencyTwoElValue} `;
    });
}

currencyOneEl.addEventListener("change", calculate);
amountOneEl.addEventListener("input", calculate);
currencyTwoEl.addEventListener("change", calculate);
amountTwoEl.addEventListener("input", calculate);

calculate();
