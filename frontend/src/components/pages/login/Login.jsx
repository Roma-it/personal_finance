import React, { useContext } from 'react'
import Container from "../../container/Container"
import './login.css'
import { Link } from "react-router-dom"
import { useState} from 'react'
import { Redirect } from "react-router-dom"
import {userContext} from '../../contexts/userContext'

function FrontPage() {

    const { userLogged, setUserLogged} = useContext(userContext)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [result, setResult] = useState("")

    const data = {
                mail:email,
                pass:pass,
            }
    const fetchUser = async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:4000/users/login",
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
        const user = await response.json()
        setResult(user)
        setUserLogged(user)
    }
    console.log(result)
    if (userLogged.id){
        return <Redirect to="/home"/>
        
    } else {
    return (
        <Container>
            <p className="sub-title">PERSONAL <b>FINANCE</b></p>
            {result === "Credenciales Incorrectas" && <p className="danger">{result}</p>}
            <form className="display-center column" action="">
                <input onChange={(e)=> setEmail(e.target.value)} className="field" type="email" name="email" placeholder="email" autoComplete="off"/>
                <input onChange={(e)=> setPass(e.target.value)}className="field" type="password" name="pass" placeholder="password" autoComplete="off"/>
                <button  onClick={fetchUser}id="loginBtn" className="btn">INGRESAR</button>
            </form>
            <p className="small-text" >No estás registrado? Hace click <Link className="link" to="/register">aquí</Link></p>
        </Container>
    )
    }
}

export default FrontPage
