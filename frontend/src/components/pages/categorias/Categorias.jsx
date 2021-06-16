import React from 'react'
import {useRef, useEffect, useState, useContext} from 'react'
import Record from '../../utilities/Record';
import './categories.css'

function Categorias() {
    const [catArray, setCatArray] = useState([])
    const [operations, setOperations] = useState([]);
    const [valueCategory, setValueCategory] = useState ("")
    const type = useRef(null)
    
    const fetchCategories = async ()=>{
        const result  = await fetch(`http://localhost:4000/operations/categories/${type.current.value}`);
        const data = await result.json();
        setCatArray (data);
    }
    useEffect(() => {
       const fetchData = async () =>{
           console.log(valueCategory)
           if(valueCategory){
            const result = await fetch(`http://localhost:4000/operations/byCategory/${valueCategory}`);
            const data = await result.json();
            setOperations(data)}
        }       
        fetchData()
    }, [valueCategory])
    return (
        <div className="categories">
            <select onChange={fetchCategories} id="op_type" className="field min-width" name="op_type" ref={type}>
                    <option value="">Tipo de operacion</option>
                    <option value="1">Ingreso</option>
                    <option value="2">Egreso</option>
                </select>
            <select  onChange={(e)=>setValueCategory(e.target.value)} id="category" className="field min-width" name="op_type" value={valueCategory}>
                    <option value="">Categoria</option>
                    {
                        catArray.map((category,i) =>{
                            return <option key={category.id+i} value={category.id}>{category.name} </option>
                        })
                    }
                </select>
        {
            operations.length > 0 ?
        <>  
        <h2 className="list-title">Listado de Operaciones</h2>

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
                    date={record.op_date} id={record.id}/>
                })
            }
            </tbody>
        </table> </>:
         "No se han encontrado operaciones"
        }
        </div>
    )
}

export default Categorias
