import React from 'react'
import './card.css'
import {useState, useEffect} from "react"
import Record from "./Record"

function Card(props) {

    const [operations, setOperations] = useState([{category:{name:""}, operation_type:{name:""}}]);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await fetch(props.url);
            const data = await result.json();
            setOperations(data)
        }
        fetchData();        
    }, [props.url])
    return (
        <div>
        <h2 className="list-title">{props.title}</h2>

        <table className="last-op-table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Categoria</th>
                    <th>Concepto</th>
                    <th>Tipo</th>
                    <th>Monto</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {
                operations.map((record,i) => {
                   return <Record key={record.id+i+record.amount} amount={record.amount} 
                    type={record.operation_type.name}
                    concept={record.concept} category={record.category.name} 
                    date={record.op_date} url={props.url} id={record.id}/>
                })
            }
            </tbody>
        </table>
        </div>
    )
}

export default Card
