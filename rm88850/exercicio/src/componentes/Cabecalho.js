import React from 'react'
import ListaCarros from './Carros'

export default function Cabecalho(){

    return(
    <>
        <header className="App-header">
            <h1>Primeiro exercício React-Js</h1>
            <p>
                Por enquanto, tá ficando bom.
            </p>
            <ListaCarros/>
        </header>
    </>
    )
}