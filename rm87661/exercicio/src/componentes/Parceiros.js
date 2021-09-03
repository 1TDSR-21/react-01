import React from 'react'

export default function Parceiros(props){

    let num1 = 10
    let num2 = 5

    return (
        <div>
            <h2>Parceiros</h2>
            <span>O resultado do cálculo é:{props.calculo(num1,num2)}</span>
            <ul>
                <li><a href="https://www.vw.com.br/pt.html">Volkswagen</a></li>
                <li><a href="https://www.chevrolet.com.br/">Chevrolet</a></li>
                <li><a href="https://www.bmw.com.br/pt/index.html">BMW</a></li>
                <li><a href="https://www.mercedes-benz.com.br/">Mercedes</a></li>
            </ul>
        </div>
    )
}