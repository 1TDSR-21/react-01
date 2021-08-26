import React from 'react'
import logoTurma from '../img/logo-1tdsr.jpg'
export default function ListaAlunos(){
    return(
        <div>
            <ul>
                <li><img src={logoTurma} width="10%"/> - Ewerton</li>
                <li><img src={logoTurma} width="10%"/> - Lucas</li>
                <li><img src={logoTurma} width="10%"/> - André</li>
                <li><img src={logoTurma} width="10%"/> - Hugo</li>
                <li><img src={logoTurma} width="10%"/> - Oswaldo</li>
            </ul>
        </div>
    )
}

