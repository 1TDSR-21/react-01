import React from 'react'
import '../src/App.css'
import Master from './Master/Master.jsx'

//props componetizando -> props children

export default function App(){
    return(
        <>
        <div className="container">
            <Master/>
        </div>
        </>
    )
}