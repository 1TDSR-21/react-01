import React from 'react'
import Carros from './Carros'
import Parceiros from './Parceiros'

export default function Cabecalho(){
    return (
        <div>
            <header className="App-header">
                <h1>Carros</h1>
                <p>Compre aqui o seu carro</p>
                <Carros/>
                <Parceiros/>
            </header>
            
        </div>
    )
}