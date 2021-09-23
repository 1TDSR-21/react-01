import React from 'react'
import { SecaoHome } from '../../styled'
import imgLogo from '../img/styled-img.png'

export default function Home() {
    return (
        <SecaoHome>
            <aside id="lado-e">
                <p>Estamos trabalhando para trazer o melhor conteúdo até você.</p>
            </aside>
            <figure className="imagem">
                <img src={imgLogo} alt="Unhas sendo pintadas." />
            </figure>
            <aside id="lado-d">
                <p>Nossa motivação é você</p>
            </aside>
        </SecaoHome>
    )
}
