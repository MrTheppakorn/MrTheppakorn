import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onExpenseData, onAddNewExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // const [expenseData, setExpenseData] = useState({
    //     title: '',
    //     price: '',
    //     date: ''
    // });

    const onTitleChange = e => {
        setTitle(e.target.value)
    }

    const onPriceChange = e => {
        setAmount(e.target.value)
    }

    const onDateChange = e => {
        setDate(e.target.value)
    }

    const onFromSubmit = e => {
        e.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }
        onExpenseData(expenseData);
        setTitle('')
        setAmount('')
        setDate('')
    }

    //const onTitleChange = e => {
    //setExpenseData((prevState) => {
    //return { ...expenseData, title: e.target.value }
    //})
    //}

    return (
        <form onSubmit={onFromSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={onTitleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type="number" value={amount} onChange={onPriceChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={date} onChange={onDateChange} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add</button>
                <button type='button' onClick={onAddNewExpense} >Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm
