import React from 'react'

export default function Parceiros(props){
    let nr1 = 1
    let nr2 = 5
    return(
        <>
            <h2>Parceiros envolvidos</h2>
            <span>{props.calculo(nr1, nr2)}</span>
            <p><a href="#">Camaro</a></p>
            <p><a href="#">Audi</a></p>
            <p><a href="#">Poscher</a></p>
            <p><a href="#">McLaren</a></p>
            <p><a href="#">Fusca</a></p>
        </>
    )
}