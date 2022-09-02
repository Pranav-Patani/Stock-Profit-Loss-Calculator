const initialPrice = document.querySelector(`.initial-price`);
const stockQuantity = document.querySelector(`.stock-quantity`);
const currentPrice = document.querySelector(`.current-price`);
const button = document.querySelector(`.button`);
const output = document.querySelector(`.output`);
const hero = document.querySelector(`.hero`);
const footer = document.querySelector(`.footer`);
const calculatorContainer = document.querySelector(`.calculator`);

function clickHandler(event) {
  event.preventDefault();
  let inipri = Number(initialPrice.value);
  let qty = Number(stockQuantity.value);
  let curr = Number(currentPrice.value);
  if (inipri < 0 || qty < 0 || curr < 0) {
    showOutput(`Negative values detected! You can only enter positive values.`);
  } else if (inipri == "" || qty == "" || curr == "") {
    showOutput(`Empty values detected! Please fill all the values correctly.`);
  } else {
    calculateProfitOrLoss(inipri, qty, curr);
  }
}

function calculateProfitOrLoss(initialPrice, stockQuantity, currentPrice) {
  if (initialPrice > currentPrice) {
    let loss = -((currentPrice - initialPrice) * stockQuantity);
    let lossPercentage = (loss / (initialPrice * stockQuantity)) * 100;
    showOutput(
      `Oh no! You are in a loss of ${loss}.
       Loss Percentage : ${lossPercentage.toFixed(2)}%`
    );
    lossBg();
  } else if (currentPrice > initialPrice) {
    let profit = (currentPrice - initialPrice) * stockQuantity;
    let profitPercentage = (profit / (initialPrice * stockQuantity)) * 100;
    showOutput(
      `Profit! You have a profit of ${profit}. 
      Profit Percentage : ${profitPercentage.toFixed(2)}%`
    );
    profitBg();
  } else {
    showOutput(`Neither Profit, Nor Loss.`);
    normalBg();
  }
}

function showOutput(message) {
  output.innerText = message;
}

function profitBg() {
  document.body.style.backgroundImage = `linear-gradient(#15803d,#16a34a)`;
  hero.style.backgroundImage = `linear-gradient(#16a34a,#15803d)`;
  footer.style.backgroundImage = `linear-gradient(#15803d,#16a34a)`;
  calculatorContainer.style.backgroundImage = `linear-gradient(#16a34a,#15803d)`;
  initialPrice.style.backgroundColor = `#4ade80`;
  stockQuantity.style.backgroundColor = `#4ade80`;
  currentPrice.style.backgroundColor = `#4ade80`;
  initialPrice.style.border = `2px solid #15803d`;
  stockQuantity.style.border = `2px solid #15803d`;
  currentPrice.style.border = `2px solid #15803d`;
  initialPrice.style.color = `#14532d`;
  stockQuantity.style.color = `#14532d`;
  currentPrice.style.color = `#14532d`;
  button.style.backgroundColor = `#166534`;
}

function lossBg() {
  document.body.style.backgroundImage = `linear-gradient(#b91c1c,#dc2626)`;
  hero.style.backgroundImage = `linear-gradient(#dc2626,#b91c1c)`;
  footer.style.backgroundImage = `linear-gradient(#b91c1c,#dc2626)`;
  calculatorContainer.style.backgroundImage = `linear-gradient(#dc2626,#b91c1c)`;
  initialPrice.style.backgroundColor = `#f87171`;
  stockQuantity.style.backgroundColor = `#f87171`;
  currentPrice.style.backgroundColor = `#f87171`;
  initialPrice.style.border = `2px solid #b91c1c`;
  stockQuantity.style.border = `2px solid #b91c1c`;
  currentPrice.style.border = `2px solid #b91c1c`;
  initialPrice.style.color = `#7f1d1d`;
  stockQuantity.style.color = `#7f1d1d`;
  currentPrice.style.color = `#7f1d1d`;
  button.style.backgroundColor = `#991b1b`;
}

function normalBg() {
  document.body.style.backgroundImage = `linear-gradient(var(--gradient-dark), var(--gradient-light))`;
  hero.style.backgroundImage = `linear-gradient(var(--gradient-light),var(--gradient-dark))`;
  footer.style.backgroundImage = `linear-gradient(var(--gradient-dark), var(--gradient-light))`;
  calculatorContainer.style.backgroundImage = `linear-gradient(var(--gradient-light),var(--gradient-dark))`;
  initialPrice.style.backgroundColor = `var(--input-fields)`;
  stockQuantity.style.backgroundColor = `var(--input-fields)`;
  currentPrice.style.backgroundColor = `var(--input-fields)`;
  initialPrice.style.border = `2px solid var(--border-color)`;
  stockQuantity.style.border = `2px solid var(--border-color)`;
  currentPrice.style.border = `2px solid var(--border-color)`;
  initialPrice.style.color = `var(--text-color-dark)`;
  stockQuantity.style.color = `var(--text-color-dark)`;
  currentPrice.style.color = `var(--text-color-dark)`;
  button.style.backgroundColor = `var(--button-color)`;
}

button.addEventListener("click", clickHandler);