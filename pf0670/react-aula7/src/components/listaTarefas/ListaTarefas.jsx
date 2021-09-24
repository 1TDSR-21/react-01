import React, { useState } from 'react'
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

    //State que controla a lista de Tarefas
    const [tarefa, setTarefa] = useState([
        {
            titulo: 'Relatório de Vendas',
            setor: 'Depto-Vendas',
            descricao: 'Levantar os valores das vendas deste mês.',
            responsavel: 'André Garbini'
        },
        {
            titulo: 'Relatório de Perdas',
            setor: 'Depto-Contas',
            descricao: 'Gerar relatório de danos e perdas.',
            responsavel: 'Everton'
        }
    ])

    const addTarefa = () => {
        const novaTarefa = {
            titulo: 'Ativos importantes',
            setor: 'Controladoria',
            descricao: 'Gerar lista com os ativos da empresa que necessitam ser baixados para reforma.',
            responsavel: 'Samuca'
        }

        setTarefa([...tarefa, novaTarefa])
    }

    return (
        <>
            <button onClick={addTarefa}>ADD TAREFA</button>
            <DivLista>
                {tarefa.map(
                    (tar, i) => (
                        <Tarefas
                            key={i}
                            titulo={tar.titulo}
                            setor={tar.setor}
                            descricao={tar.descricao}
                            responsavel={tar.responsavel}
                        />
                    ))}

            </DivLista>

        </>
    )
}
