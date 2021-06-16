import React from 'react'
import './register-form.css'
import { Redirect, useParams } from "react-router-dom"
import {useRef, useEffect, useState, useContext} from 'react'
import { balanceContext } from '../../../contexts/balaceContext'

function RegisterForm() {

    const {id} = useParams();
    const { setBalance} = useContext(balanceContext)
    const [operation, setOperation] = useState({})
    const [result, setResult] = useState("")
    const [concept, setConcept] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    const type = useRef(null)
    
    useEffect(() => {
       const fetchData = async () =>{
            const result = await fetch(`http://localhost:4000/operations/op/${id}`);
            const data = await result.json();
            setOperation(data)
        }
       fetchData(); 
    }, [id])

    useEffect(() => {
       setAmount(operation.amount)
       setConcept(operation.concept)
       setDate(operation.op_date)
    }, [operation])
  
    useEffect(() => {
    const edit = document.getElementById("edit")
    const del = document.getElementById("delete")
    const concept = document.getElementById("concept")
    const amountField = document.getElementById("amount")
    const op_date = document.getElementById("op_date")

    del.addEventListener("click", async (e)=>{
        e.preventDefault()
        const res =  await fetch(`http://localhost:4000/operations/delete/${id}`,{
            method:"DELETE",
            headers:{ 'Content-Type': 'application/json'}})
        setResult(res.status);
    })
    edit.addEventListener("click", async (e)=>{
        e.preventDefault()
        const data = {
            concept:concept.value,
            amount:parseInt(amountField.value),
            op_date:op_date.value,
    }
     const res =  await fetch(`http://localhost:4000/operations/edit/${id}`,{
            method:"PUT",
            headers:{
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       setResult(res.status) 
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

      const handleChange = (e)=>{
          if(e.target.id === "concept"){setConcept (e.target.value)}
          else if (e.target.id === "amount"){setAmount (e.target.value)
       }
          else {setDate (e.target.value)}
    }
    if(result===200){
        return <Redirect to="/home"/>
    } else {
    return (
        <div className="register-form">
            <p className="sub-title">REGISTRO DE OPERACIONES</p>
            <form className="display-center column" action="" method="POST">
                <input id="op_type" disabled={true} value={operation.operation_type && operation.operation_type.name} className="field" name="op_type" ref={type}/>              
                <input id="category" disabled={true} value={operation.category && operation.category.name} className="field" name="op_type"/>
                <input id="concept" onChange={ handleChange} className="field" type="text" name="concept" placeholder="Concepto" autoComplete="off" value={concept}/>
                <input id="amount" onChange={ handleChange} className="field" type="number" name="amount" placeholder="Monto" autoComplete="off" value={amount}/>
                <input id="op_date" onChange={ handleChange} className="field" type="date" name="op_date" placeholder="Fecha" autoComplete="off" value={date}/>
                <button className="btn" id="edit">EDITAR</button>
                <button className="btn" id="delete">ELIMINAR</button>
            </form>
        </div>
    )}
}

export default RegisterForm
