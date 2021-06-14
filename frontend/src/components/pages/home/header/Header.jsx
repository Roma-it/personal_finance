import React from 'react'
import UserLogged from './UserLogged'
import './header.css'
import {Link} from 'react-router-dom'

function header() {
    return (
        <header className="header">
            <Link className="logo link" to="/home">PERSONAL <b>FINANCE</b></Link>
            <UserLogged name="Rodrigo"/>
        </header>
    )
}

export default header
