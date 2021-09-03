 import React from 'react'
 import logoTurma from '../img/logo-1tdsr.jpg'

export default function ListaAlunos() {
    const logotipo = <img src={logoTurma} width="10%"/>

    return(
        <div>
            <ul>
                <li>{logotipo} - Israel</li>
                <li>{logotipo} - Rafael</li>
                <li>{logotipo} - Cecilia</li>
                <li>{logotipo} - Aline</li>
                <li>{logotipo} - Ana</li>
            </ul>
        </div>

    )
}