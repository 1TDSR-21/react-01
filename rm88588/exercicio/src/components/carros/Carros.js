import React from 'react'
import imageBase from '../img/carro-base.jpg'

export default function Carros(props) {


  //Utilizando map
  const lista = props.carrosAttrib.map(
    (c,i)=>
    <li key={i}>{i+1} - {c}</li>
  )

   return(
      <>
        <img src={imageBase} alt="Isso não é um carro é um monstro!!!!" />

            <h2>Minha lista dos Sonhos:<span >{props.carrosAttribTitulo}</span></h2>
          <ul>

            {lista}

            {/*
            <li>{props.carrosAttrib[0]}</li>
            <li>{props.carrosAttrib[1]}</li>
            <li>{props.carrosAttrib[2]}</li> 
            <li>{props.carrosAttrib[3]}</li>
            <li>{props.carrosAttrib[4]}</li>
            <li>{props.carrosAttrib[5]}</li>
            <li>{props.insereCarro()}</li>
            */}
        </ul>
      </>
)}