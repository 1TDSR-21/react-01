import React from 'react'
import logo from '../logo.svg';
import ListaAlunos from './ListaAlunos';

export default function Cabecalho(){

    const nomeCurso = '1TDS'

    return(
    <>
       <header className="App-header">
            <ListaAlunos/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edite <code>src/App.js</code> e salve para recarregar.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <p>Aprenda React com {nomeCurso}</p> 
            </a>
      </header>
    </>
    )
}