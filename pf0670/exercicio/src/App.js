import React from 'react'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import Parceiros from './components/parceiros/Parceiros'

export default function App() {


    //Criando um array/vetor de veículos para que sejam enviados para o componente
    // Carros. Assim funciona o props
    const listaCarros = ['Jaguar','X-1','Uno','Porsche','Comodoro','XR1']

    //Criando um atributo simples em String.
    const listaSonho = 'MINHA-LISTA'

    //Passando uma função como atributo
    const maisCarros = ()=> 'Gol'
    
    const multiplica = (nr1,nr2) => nr1*nr2

   return(
      <>
        <Cabecalho/>
        <Carros carrosAttrib={listaCarros} carrosAttribTitulo={listaSonho} insereCarro={maisCarros}/>
        <Parceiros calculo={multiplica}/>
      </>
)}