import React, { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import { data } from './components/Expense/ExpenseData'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState(data);

  const addNewExpense = expense => {
    setExpenses((prveState) => {
      return [expense, ...prveState]
    })
  }

  return (
    <div>
      <NewExpense onNewExpenses={addNewExpense} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
