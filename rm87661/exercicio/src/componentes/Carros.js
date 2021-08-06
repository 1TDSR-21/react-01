import React from 'react'
import carro from '../img/carro.jpg'

export default function Carros(){
    return (
        <div>
            <img src={carro} width="60%"></img>
            <ul>
                <li>Golf</li>
                <li>Jetta</li>
                <li>M3</li>
                <li>GLA 200</li>
                <li>Cruze</li>
            </ul>
        </div>
    )
}