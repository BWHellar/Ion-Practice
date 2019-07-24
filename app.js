const expense = document.querySelector('#expense');
const amount = document.querySelector('#amount');
const add = document.querySelector('#add');
const cancel = document.querySelector('#cancel');
const list = document.querySelector('#list');

add.addEventListener('click', () => {
    const enteredExpense = expense.value;
    const enteredAmount = amount.value;

    if(enteredExpense.trim().length<= 0 || 
    enteredAmount <= 0 || 
    enteredAmount.trim().length <= 0) 
    {
        return;
    }
    const item = document.createElement('ion-item');
    item.textContent = enteredExpense + ': $' + enteredAmount;

    list.appendChild(item);
});