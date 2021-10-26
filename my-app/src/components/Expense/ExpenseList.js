import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ filterExpense }) => {

    if (filterExpense.length === 0) {
        return <h2>No Expense.</h2>

    }

    return (
        <ul className='expenses-list'>
            {filterExpense.map((ex) =>
                <ExpenseItem key={ex.id}
                    title={ex.title}
                    amount={ex.amount}
                    date={ex.date}
                />
            )}
        </ul>
    )
}

export default ExpenseList
