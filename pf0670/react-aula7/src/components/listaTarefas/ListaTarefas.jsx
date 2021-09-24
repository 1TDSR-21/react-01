import React, { useState } from 'react'
import Tarefas from '../tarefas/Tarefas'

import styled from 'styled-components'
import FormTarefas from '../formtarefas/FormTarefas'

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


    const [nTarefa, setNTarefa] = useState({
        titulo: '',
        setor: '',
        descricao: '',
        responsavel: ''
    })

    const addTarefa = (e) => {
        e.preventDefault()
        setTarefa([...tarefa, nTarefa])
        setNTarefa({
            titulo: '',
            setor: '',
            descricao: '',
            responsavel: ''
        })
    }

    const captura = (e) => {

        //Executando o destructed
        const { name, value } = e.target

        //Criando uma estrutura de decisão para saber qual foi o campo que realizou a digitação.
        if (name === 'titulo') {
            setNTarefa({ titulo: value, setor: nTarefa.setor, descricao: nTarefa.descricao, responsavel: nTarefa.responsavel })
        } else if (name === 'setor') {
            setNTarefa({ titulo: nTarefa.titulo, setor: value, descricao: nTarefa.descricao, responsavel: nTarefa.responsavel })
        } else if (name === 'descricao') {
            setNTarefa({ titulo: nTarefa.titulo, setor: nTarefa.setor, descricao: value, responsavel: nTarefa.responsavel })
        } else if (name === 'responsavel') {
            setNTarefa({ titulo: nTarefa.titulo, setor: nTarefa.setor, descricao: nTarefa.descricao, responsavel: value })
        }

    }

    return (
        <>

            <DivLista>
                <FormTarefas addTarefa={addTarefa} tarefa={nTarefa} digit={captura} />
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



{/* <button onClick={addTarefa}>ADD TAREFA</button> */ }