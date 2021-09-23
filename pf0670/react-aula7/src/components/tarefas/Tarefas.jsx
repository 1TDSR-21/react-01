import React from 'react'
import styled from 'styled-components'

export const DivTarefa = styled.div`
    background-color: #ffb;
    border:2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding:20px;
    text-align:center;
    width:350px;
    height:200px;
    margin:10px;

    h2,p{
        padding-bottom:10px;
    }

`



export default function Tarefas() {
    return (
        <DivTarefa>
            <h2>Relatório de Vendas</h2>
            <p><b>Para: </b>Depto-Vendas</p>
            <p><b>Descrição : </b>Levantar os valores das vendas deste mês.</p>
            <p><b>Responsável : </b>André Garbini</p>
        </DivTarefa>
    )
}
