import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onNewExpenses }) => {
    const [onEditing, setOnEditing] = useState(false);

    const onExpenseDataHandle = (exData) => {
        const expenseData = {
            ...exData,
            id: Math.random().toString()
        };
        onNewExpenses(expenseData)
    };

    const onAddNewExpense = e => {
        setOnEditing(!onEditing)

    }

    return (
        <div className='new-expense'>
            {!onEditing && <button onClick={onAddNewExpense}>Add New Expense</button>}
            {onEditing && <ExpenseForm onExpenseData={onExpenseDataHandle} onAddNewExpense={onAddNewExpense} />}
        </div>
    )
}

export default NewExpense
