// variables
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
const transactionInput = document.querySelector("#transactionInput");
const transactionLocation = document.querySelector("#transactionLocation");
const showExpenses = document.querySelector("#whereExpensesshow");
const expenseArray = [];
const expenseCost = [];

// expense object
class Expense {
  constructor(cost, location) {
    this.cost = cost;
    this.location = location;
  }
}
// event listeners
plusBtn.addEventListener("click", function(e) {
  addTransaction("plus", 1);
  e.preventDefault();
});
minusBtn.addEventListener("click", function(e) {
  addTransaction("minus", -1);
  e.preventDefault();
});
// function to run when plus or minus button is clicked
function addTransaction(expenseColor, posNegNum) {
  if (transactionInput.value && transactionLocation.value != "") {
    const date = new Date();
    const dateCreated = date.toDateString();
    const newExpense = new Expense(
      transactionInput.value,
      transactionLocation.value
    );
    expenseArray.push(newExpense);
    let transactionNum = newExpense.cost;
    expenseCost.push(Number(transactionNum * posNegNum));
    const transactionDiv = document.createElement("div");
    transactionDiv.innerHTML = `<p><small>${dateCreated}</small></p><h5>${
      newExpense.cost
    }</h5><p>${newExpense.location}</p>`;
    showExpenses.appendChild(transactionDiv);
    transactionDiv.classList.add(expenseColor);
    let newBalance = transactionInput.value;
    console.log(Number(newBalance));
    addUpWallet();
  }
  setTimeout(() => {
    transactionInput.value = "";
    transactionLocation.value = "";
  }, 100);
}
// adds up expenses
function addUpWallet() {
  let walletBalance = document.querySelector("#walletBalance");
  const sumWallet = (a, b) => {
    return a + b;
  };
  walletBalance.textContent = expenseCost.reduce(sumWallet);
}
