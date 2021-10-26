import React, { useState } from 'react'
import ExpenseChart from './ExpenseChart'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import './Expenses.css'
import Card from './UI/Card'

const Expenses = ({ item }) => {
    const [filter, setFilter] = useState('all')

    const onFilterChange = (selectYear) => {
        setFilter(selectYear)
    }

    const filterExpense = item.filter((ex) => {
        if (filter === 'all') {
            return item;
        }
        return ex.date.getFullYear().toString() === filter;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectYear={filter} onFilterChange={onFilterChange} />
                <ExpenseChart expenses={filterExpense} />
                <ExpenseList filterExpense={filterExpense} />
            </Card>
        </div>

    )
}

export default Expenses
