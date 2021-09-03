import React from 'react'
import Header from '../header/Header'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'

export default function Master() {

    return (
        <div className="container">
            <h2>O SITE</h2>
            <Header />
            <Sobre />
            <Servicos />
        </div>
    )
}