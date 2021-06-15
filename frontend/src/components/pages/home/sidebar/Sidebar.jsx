import React from 'react'
import Buttons from './Buttons'
import './sidebar.css'
import { useRef} from 'react'

function Sidebar() {

    const navBar = useRef();

    const toggleFunction = ()=>{
        navBar.current.classList.toggle("nav-show")
    }

    return (
       <div className="sidebar">
           <div onClick={toggleFunction} className="burger-btn">
               <i className="fas fa-bars"></i>
           </div>
           <nav className="nav" id="nav" ref={navBar}>
            <Buttons path={"/registerOperation"} name="Registrar Operacion"/>
            <Buttons path={"/ingreso"} name= "Operaciones de Ingreso"/>
            <Buttons path={"/egreso"} name= "Operaciones de Egreso"/>
            <Buttons path={"/categorias"} name= "Operaciones por Categoria"/>
            </nav>
       </div>
    )
}

export default Sidebar
