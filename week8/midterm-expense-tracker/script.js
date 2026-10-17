"use strict";

/*
  JavaScript Midterm
  Mini Expense Tracker
*/

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------

const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");
const addButton = document.querySelector("#add-expense");
const resetButton = document.querySelector("#reset");
const expenseList = document.querySelector("#expense-list");
const expenseCount = document.querySelector("#expense-count");
const totalDisplay = document.querySelector("#total");
const budgetStatus = document.querySelector("#budget-status");
const message = document.querySelector("#message");

// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------

let expenses = [];
const BUDGET = 500;

// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------

function showMessage(text, type) {
  message.textContent = text;
  message.classList.remove("error", "success");

  if (type) {
    message.classList.add(type);
  }
}

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function clearForm() {
  descriptionInput.value = "";
  amountInput.value = "";
  categorySelect.selectedIndex = 0;
}

function addExpense() {
  const description = descriptionInput.value.trim();
  const amountText = amountInput.value.trim();
  const category = categorySelect.value;

  if (description === "") {
    showMessage("Please enter a description.", "error");
    return;
  }

  if (amountText === "") {
    showMessage("Please enter an amount.", "error");
    return;
  }

  const amount = Number(amountText);

  if (Number.isNaN(amount)) {
    showMessage("The amount must be a valid number.", "error");
    return;
  }

  if (amount <= 0) {
    showMessage("The amount must be greater than 0.", "error");
    return;
  }

  const expense = {
    description: description,
    amount: amount,
    category: category
  };

  expenses.push(expense);

  displayExpenses();
  updateBudgetStatus();
  showMessage("Expense added successfully.", "success");
  clearForm();
}

function displayExpenses() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-message");
    emptyMessage.textContent = "No expenses have been added yet.";
    expenseList.appendChild(emptyMessage);
  }

  for (let i = 0; i < expenses.length; i++) {
    const item = document.createElement("div");
    item.classList.add("expense-item");

    const description = document.createElement("span");
    description.classList.add("expense-description");
    description.textContent = expenses[i].description;

    const category = document.createElement("span");
    category.classList.add("expense-category");
    category.textContent = expenses[i].category;

    const amount = document.createElement("span");
    amount.classList.add("expense-amount");
    amount.textContent = formatMoney(expenses[i].amount);

    item.appendChild(description);
    item.appendChild(category);
    item.appendChild(amount);
    expenseList.appendChild(item);
  }

  expenseCount.textContent = `${expenses.length} ${expenses.length === 1 ? "Expense" : "Expenses"}`;
}

function calculateTotal() {
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return Math.round(total * 100) / 100;
}

function updateBudgetStatus() {
  const total = calculateTotal();
  totalDisplay.textContent = formatMoney(total);

  budgetStatus.classList.remove("under-budget", "over-budget");

  if (total <= BUDGET) {
    budgetStatus.textContent = "You are under budget.";
    budgetStatus.classList.add("under-budget");
  } else {
    budgetStatus.textContent = "You are over budget.";
    budgetStatus.classList.add("over-budget");
  }
}

function resetApp() {
  expenses = [];

  displayExpenses();
  updateBudgetStatus();
  showMessage("", null);
  clearForm();
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------

addButton.addEventListener("click", addExpense);
resetButton.addEventListener("click", resetApp);
