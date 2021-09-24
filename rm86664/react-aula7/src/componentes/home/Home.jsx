import React from 'react'
import styled from 'styled-components'

const DivHome = styled.div`
    width:100%;
    height:85vh;
    background: #bbf;
    h1, p{padding:20px; color:#fff;}
`;

export default function Home() {
    return (
        <DivHome>
            <h1>Página inicial do projeto</h1>
            <p>Controle de Tarefas</p>
        </DivHome>
    )
}
