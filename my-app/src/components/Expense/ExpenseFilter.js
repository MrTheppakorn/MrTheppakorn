import React from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = ({ onFilterChange, selectYear }) => {
    const onSelectChange = e => {
        onFilterChange(e.target.value)
    }

    return (
        <div className='filter'>
            <div>
                <label>Filter by year</label>
                <select value={selectYear} onChange={onSelectChange}>
                    <option value="all">All</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
