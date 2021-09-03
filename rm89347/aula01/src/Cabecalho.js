import logo from './logo.svg';
import React from 'react'
import ListaAlunos from './componetes/ListaAlunos';

export default function Cabecalho() {

    const nomeCurso = '1TDSR'

    return(
        <>
        <header className="App-header">
            <ListaAlunos/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edite <code>src/App.js</code> salve para recarregar.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Aprenda React no {nomeCurso}
            </a>
        </header>
        </>
    )
}