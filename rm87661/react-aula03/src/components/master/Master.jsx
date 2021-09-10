import React from 'react'
import Header from '../header/Header'


export default function Master() {

    const navegador = navigator.userAgent

    return (
        <div className="container">
            <h2>O SITE</h2>
            <Header/>
            <p>NAVEGADOR: {navegador}</p>
            {console.log("QUEM CONECTA: ", navegador)}
        
        </div>
    )
}