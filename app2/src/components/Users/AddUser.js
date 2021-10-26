import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModule from '../UI/ErrorModule';
import classes from './AddUser.module.css'

const AddUser = ({ onAddList }) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(false);

    const onAddUser = (e) => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError(true)
            return;
        }
        if (+age < 1) {
            setError(true)
            return;
        }
        onAddList(userName, age)
        setUserName('')
        setAge('')
    }

    const onUserNameChange = e => {
        setUserName(e.target.value)
    }

    const onAgeChange = e => {
        setAge(e.target.value)
    }

    const errorHandle = () => {
        setError(false)
    }

    return (
        <div>
            {error && <ErrorModule title='Error' message='404' onConfirm={errorHandle} />}
            <Card className={classes.input}>
                <form onSubmit={onAddUser}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type="text" value={userName} onChange={onUserNameChange} />
                    <label htmlFor="age">Age</label>
                    <input id='age' type="number" value={age} onChange={onAgeChange} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
