import React from 'react'
import fuscao from '../img/fuscao.jpg'

export default function ListaCarros(){
    return(
        <div>
            <img src={fuscao} alt="" width='50%'/>
            <ul>
                <li>1º - Fuscão Top</li>
                <li>2º - Uno Escada</li>
                <li>3º - Brasília Amarela</li>
                <li>4º - Corsinha</li>
                <li>5º - Gol Quadrado</li>
            </ul>
        </div>
    )
}
