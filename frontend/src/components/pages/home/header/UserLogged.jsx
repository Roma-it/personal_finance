import React, { useContext } from 'react'
import { userContext } from '../../../contexts/userContext'

function UserLogged(props) {

    const {userLogged} = useContext(userContext)
    console.log(userLogged)
    return (
        <div className="display-flex">
            <p>Bienvenido <b>{userLogged.name}</b></p>
        </div>
    )
}

export default UserLogged
