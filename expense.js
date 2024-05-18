// Get the elements
const expenseForm = document.getElementById('formex');
const amountIn = document.getElementById('amountInput');
const categoryIn = document.getElementById('categoryInput');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expTable = document.getElementById('expenseTable');
const expBody = document.getElementById('expenseBody');
const dateex=document.getElementById('dateInput')


addExpenseBtn.addEventListener('click', addExpense);

function addExpense() {
  const amount = amountIn.value;
  const category = categoryIn.value;
  
  const row = document.createElement('tr');
  const amountTd = document.createElement('td');
  amountTd.textContent = amount;
  const categoryTd = document.createElement('td');
  categoryTd.textContent = category;

  const dateTd = document.createElement('td');
  dateTd.textContent = category;

  const actionsTd = document.createElement('td');
  actionsTd.innerHTML = `
    <button class="done-btn">Done</button>
    <button class="delete-btn">Delete</button>
  `;


  row.appendChild(amountTd);
  row.appendChild(categoryTd);
 
  row.appendChild(dateTd);
  row.appendChild(actionsTd);
  expenseBody.appendChild(row);

  amountIn.value = '';
  categoryIn.value = '';
  dateInput.value='';
  const doneBtn = row.querySelector('.done-btn');
  const deleteBtn = row.querySelector('.delete-btn');
  doneBtn.addEventListener('click', markAsDone);
  deleteBtn.addEventListener('click', deleteExpense);
}
function markAsDone(event) {
  const row = event.target.parentNode.parentNode;
  row.style.textDecoration = 'line-through';
}

function deleteExpense(event) {
  const row = event.target.parentNode.parentNode;
  expenseBody.removeChild(row);
}