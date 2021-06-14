import React from 'react'

function userLogged(props) {
    return (
        <div className="display-flex">
            <p>Bienvenido <b>{props.name}</b></p>
        </div>
    )
}

export default userLogged
