import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header'
import './home.css'
import Balance from '../../utilities/Balance';
import {useState, useEffect} from "react"

function Home(props) {

        const [currentBalance, setBalance] = useState(0);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await fetch("http://localhost:4000/operations/total");
            const data = await result.json();
            setBalance(data)
        }
       fetchData();
    }, [])
    return (
        <div className="home">
            <Header/>
            <Sidebar/>
            <Balance currentBalance={currentBalance}/>
            {props.children}
        </div>
    )
}

export default Home
