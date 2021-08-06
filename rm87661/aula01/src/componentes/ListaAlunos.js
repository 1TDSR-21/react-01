import React from 'react'
import logoTurma from '../img/logo-1tdsr.png'

export default function ListaAlunos(){
    return(
        <div>
            <ul>
                <li><img src={logoTurma} width="15%"/>Enzo</li>
                <li><img src={logoTurma} width="15%"/>Enzo</li>
                <li><img src={logoTurma} width="15%"/>Enzo</li>
                <li><img src={logoTurma} width="15%"/>Enzo</li>
            </ul>
            
        </div>
    )
}