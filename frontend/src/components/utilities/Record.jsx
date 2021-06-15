import React from 'react'
import './record.css'
import {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

function Record({amount, category, concept, date, type, url, id}) {
    
   const amountField = useRef(null)
 
    useEffect(() => {
      if(type==="egreso"){
            amountField.current.style.color= "#ff696d";
        } else{
            amountField.current.style.color="white";
        }
    }, [amountField, concept])
  
      return  (
        <tr >
            <td data-title="Fecha">{date}</td>
            <td data-title="Categoria">{category}</td>
            <td data-title="Concepto">{concept}</td>
            <td data-title="Tipo">{type}</td>
            <td data-title="Monto" ref={amountField}>$ {amount}</td>
            <td><Link className="btn-editar" to={`/editar/${id}`}>Editar / Eliminar</Link></td>
        </tr>) 
}

export default Record
