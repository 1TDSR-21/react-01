import React from 'react'
import { SectionHome } from '../../styled'
import StyledImg from '../images/styled-img.png'

export default function Home() {
    return (
        <SectionHome>
            <aside id="lado-e">
                <p>Estamos trabalhando para trazer o melhor conteúdo até você!</p>
            </aside>
            <figure className="imagem">
                <img src={StyledImg} alt="Unhas sendo pintadas de roxo." />
            </figure>
            <aside id="lado-d">
                <p>Nossa motivação é você!</p>
            </aside>
        </SectionHome>
    )
}
