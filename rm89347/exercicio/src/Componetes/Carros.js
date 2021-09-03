import React from 'react'
import Carro from '../img/caro.png'

export default function Carros(props) {

    const carro = <img src={Carro} width="5%"/>

    const lista = props.carrosAttrib.map(
        (c, i)=>
        <li key={i}>{i+1} - {c}</li>
    )

    return(
        <div>
            <h2>Minha lista dos sonhos:<span>{props.carrosAttribTitulo}</span></h2>
            <ul>

                {lista}

                {/*                
                    <li>{carro} - {props.carrosAttrib[0]}</li>
                    <li>{carro} - {props.carrosAttrib[1]}</li>
                    <li>{carro} - {props.carrosAttrib[2]}</li>
                    <li>{carro} - {props.carrosAttrib[3]}</li>
                    <li>{carro} - {props.carrosAttrib[4]}</li>
                    <li>{carro} - {props.carrosAttrib[5]}</li>
                    <li>{carro} - {props.insereCarro()}</li>
                */}
            </ul>
        </div>
    )
}