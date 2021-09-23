import React from 'react'
import Tarefas from '../tarefas/Tarefas'

import styled from 'styled-components'

export const DivLista = styled.div`
  width: 100%;
  min-height:85vh;
  padding:20px;
  background-color:#ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default function ListaTarefas() {
    return (
        <DivLista>
            <Tarefas />
            <Tarefas />
            <Tarefas />
        </DivLista>
    )
}
