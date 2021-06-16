import React from 'react'
import Container from "../../container/Container"
import '../frontPage/frontPage.css'
import { Link } from "react-router-dom"
import { Redirect, useParams } from "react-router-dom"
import {useRef, useEffect, useState, useContext} from 'react'

function Register() {

    const [result, setResult] = useState("")

     useEffect(() => {
    const btnForm = document.getElementById("btnForm")
    const name = document.getElementById("name")
    const last_name = document.getElementById("last_name")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")

    btnForm.addEventListener("click", async (e)=>{
        e.preventDefault()
        const data = {
            name:name.value,
            last_name:last_name.value,
            email:email.value,
            pass:pass.value,
    }
     const res =  await fetch("http://localhost:4000/users/create",{
            method:"POST",
            headers:{
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       setResult(res.status) 
    })
},[])
    if(result===200){
        return <Redirect to="/"/>
    } else {
    return (
        <Container>
            <p className="sub-title">PERSONAL <b>FINANCE</b></p>
            <form className="display-center column" action="">
                <input id="name" className="field" type="text" name="name" placeholder="nombre" autoComplete="off"/>
                <input id="last_name" className="field" type="text" name="last_name" placeholder="apellido" autoComplete="off"/>
                <input id="email" className="field" type="email" name="email" placeholder="email" autoComplete="off"/>
                <input id="pass" className="field" type="password" name="pass" placeholder="password" autoComplete="off"/>
                <button className="btn" id="btnForm">REGISTRARSE</button>
            </form>
            <p className="small-text" >Ya estás registrado? Hacé click <Link className="link" to="/">aquí</Link></p>
        </Container>
    )
    }
}

export default Register
