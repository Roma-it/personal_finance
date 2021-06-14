import React from 'react'
import './register-form.css'
import { Link } from "react-router-dom"
import {useRef, useEffect, useState, useContext} from 'react'
import { balanceContext } from '../../contexts/balaceContext'

function RegisterForm() {

    const {balance, setBalance} = useContext(balanceContext)
    const [catArray, setCatArray] = useState([])
    const [result, setResult] = useState("")
    const type = useRef(null)
    const amount = useRef(null)

    const fetchCategories = async ()=>{
        const result  = await fetch(`http://localhost:4000/operations/categories/${type.current.value}`);
        const data = await result.json();
        setCatArray (data);
    }
  
    useEffect(() => {
    const form = document.getElementById("form")
    const concept = document.getElementById("concept")
    const amountField = document.getElementById("amount")
    const op_date = document.getElementById("op_date")
    const op_type = document.getElementById("op_type")
    const category = document.getElementById("category")

    form.addEventListener("click", async (e)=>{
        e.preventDefault()
        const data = {
            concept:concept.value,
            amount:parseInt(amountField.value),
            op_date:op_date.value,
            op_type_id:parseInt(op_type.value),
            category_id:parseInt(category.value),
            user_id:1
    }
     const res =  await fetch("http://localhost:4000/operations/create",{
            method:"POST",
            headers:{
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       setResult(res) 
    })
    }, [])
    useEffect(() => {
       const fetchData = async () =>{
            const result = await fetch("http://localhost:4000/operations/total");
            const data = await result.json();
            setBalance(data)
        }
       fetchData();
    }, [result])
    const changeColor = ()=>{
        if(type.current.value == 2){
            amount.current.style.color="red";
        } else{
            amount.current.style.color="black";
        }
    }
    return (
        <div className="register-form">
            <p className="sub-title">REGISTRO DE OPERACIONES</p>
            <form className="display-center column" action="" method="POST">
                <select onChange={fetchCategories} id="op_type" className="field" name="op_type" ref={type}>
                    <option value="">Tipo de operacion</option>
                    <option value="1">Ingreso</option>
                    <option value="2">Egreso</option>
                </select>
                <select id="category" className="field" name="op_type">
                    <option value="">Categoria</option>
                    {
                        catArray.map((category,i) =>{
                            return <option key={category.id+i} value={category.id}>{category.name}</option>
                        })
                    }
                </select>
                <input id="concept" className="field" type="text" name="concept" placeholder="Concepto" autoComplete="off"/>
                <input id="amount" onChange={changeColor} className="field" ref={amount} type="number" name="amount" placeholder="Monto" autoComplete="off"/>
                <input id="op_date" className="field" type="date" name="op_date" placeholder="Fecha" autoComplete="off"/>
                <button className="btn" id="form" >REGISTRAR</button>
            </form>
        </div>
    )
}

export default RegisterForm
