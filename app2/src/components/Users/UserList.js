import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'

const UserList = ({ list }) => {
    return (
        <Card className={classes.users}>
            <ul>
                {list.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age})
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList
