import React from 'react'
import { useSelector } from 'react-redux'

export const UserView = () => {
    const numOfUsers = useSelector(state => state.user.numOfUsers)
    return (
        <div>
            <h2>List of users - {numOfUsers}</h2>
            <button>order user</button>
            <button>Restock user</button>
        </div>
    )
}
