import React from 'react'
import Container from "../../container/Container"
import '../frontPage/frontPage.css'
import { Link } from "react-router-dom"

function frontPage() {
    return (
        <Container>
            <p className="sub-title">PERSONAL <b>FINANCE</b></p>
            <form className="display-center column" action="">
                <input className="field" type="text" name="name" placeholder="nombre" autoComplete="off"/>
                <input className="field" type="text" name="last_name" placeholder="apellido" autoComplete="off"/>
                <input className="field" type="email" name="email" placeholder="email" autoComplete="off"/>
                <input className="field" type="password" name="pass" placeholder="password" autoComplete="off"/>
                <button className="btn">REGISTRARSE</button>
            </form>
            <p className="small-text" >Ya estás registrado? Hacé click <Link className="link" to="/">aquí</Link></p>
        </Container>
    )
}

export default frontPage
