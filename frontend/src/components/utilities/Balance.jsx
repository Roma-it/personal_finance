import React, { useContext } from 'react'
import './balance.css'
import { useEffect, useRef} from "react"
import { balanceContext } from '../contexts/balaceContext'
import { userContext } from '../contexts/userContext'

function Balance(props) {

    const {balance, setBalance} = useContext(balanceContext)
    const {userLogged} = useContext(userContext)

    const amountField = useRef(null)
    useEffect(() => {
    const fetchData = async () =>{
            const result = await fetch(`http://localhost:4000/operations/total/${userLogged.id}`);
            const data = await result.json();
            setBalance(data)
        }
       fetchData();
    },[balance]);
    useEffect(() => {
      if(balance<0){
            amountField.current.style.color= "#ff696d";
        } else{
            amountField.current.style.color="white";
        }
    }, [balance])
    return (
        <div className="balance">
           <p>Saldo actual: <b ref={amountField}>$ {balance}</b></p> 
        </div>
    )
}

export default Balance
