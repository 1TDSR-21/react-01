import React from 'react'
import logo from './logo.svg';
import LiastaAlunos from './componetes/ListaAlunos';

export default function Cabecalo(){

    return(
    <>
      <header className="App-header">
          <LiastaAlunos/>
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
          Aprenda React
        </a>
      </header>
    </>
    );
}