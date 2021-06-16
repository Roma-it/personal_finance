import React from 'react'
import Container from "../../container/Container"
import './frontPage.css'
import { Link } from "react-router-dom"
import {useEffect, useState} from 'react'
import { Redirect } from "react-router-dom"

function FrontPage() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [result, setResult] = useState("")
    console.log(email)
    console.log(pass)

    useEffect(() => {
         const loginBtn = document.getElementById("loginBtn")
        loginBtn.addEventListener("click", async(e)=> {
            e.preventDefault()
            console.log(email)
            console.log(pass)
            const data = {
                mail:email,
                pass:pass,
            }
            const response = await fetch("http://localhost:4000/users/login",
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const user = await response.json()
            setResult(user)
            console.log(user)
        })
    }, [email,pass])
    console.log(result)
    // if (result !== "Credenciales incorrectas"){
    //     <Redirect to="/home"/>
    // } else {
    return (
        <Container>
            <p className="sub-title">PERSONAL <b>FINANCE</b></p>
            {/* <p>{result}</p> */}
            <form className="display-center column" action="">
                <input onChange={(e)=> setEmail(e.target.value)} className="field" type="email" name="email" placeholder="email" autoComplete="off"/>
                <input onChange={(e)=> setPass(e.target.value)}className="field" type="password" name="pass" placeholder="password" autoComplete="off"/>
                <button id="loginBtn" className="btn">INGRESAR</button>
            </form>
            <p className="small-text" >No estás registrado? Hace click <Link className="link" to="/register">aquí</Link></p>
        </Container>
    )
    //}
}

export default FrontPage
