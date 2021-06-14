import React from 'react'
import Container from "../../container/Container"
import './frontPage.css'
import { Link } from "react-router-dom"

function frontPage() {
    return (
        <Container>
            <p className="sub-title">PERSONAL <b>FINANCE</b></p>
            <form className="display-center column" action="">
                <input className="field" type="email" name="email" placeholder="email" autoComplete="off"/>
                <input className="field" type="password" name="pass" placeholder="password" autoComplete="off"/>
                <Link to="/home"><button className="btn">INGRESAR</button></Link>
            </form>
            <p className="small-text" >No estás registrado? Hace click <Link className="link" to="/register">aquí</Link></p>
        </Container>
    )
}

export default frontPage
