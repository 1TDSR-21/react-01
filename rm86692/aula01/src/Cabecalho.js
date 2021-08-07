import React from "react" // importando a biblioteca do react
import logo from './logo.svg';
import ListaAlunos from './componentes/ListaAlunos';

export default function Cabecalho() {

    const nomeCurso = "1TDS"

    return(
        <>
            <header className="App-header">
                <ListaAlunos/>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React on {nomeCurso}
                </a>
            </header>
        </>
    )
}

