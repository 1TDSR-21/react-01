import React from 'react'
import Tarefas from '../tarefas/Tarefas'
import styled from 'styled-components'
import { useState } from 'react';
import FormTarefas from '../formTarefas/FormTarefas';

const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default function ListaTarefas() {

    //State que controla a lista de Tarefas
    const [tarefa,setTarefa]= useState([
    {
        titulo:'Lista de Pagamento',
        setor:'Dep. Vendas',
        descricao:'Levantar os valores de vendas',
        responsavel:'Thiago Enninger',
    },
    {
        titulo:'Planilha de Salários',
        setor:'Dep. Pessoal',
        descricao:'Gerar planilhas',
        responsavel: 'Stephanie Echevarria',
    },
])


    const [nTarefa, setNTarefa] = useState({
        titulo: '',
        setor: '',
        descricao: '',
        responsavel: '',
    })

    const addTarefa= (e)=>{
        e.preventDefault()
        setTarefa([...tarefa, nTarefa])
        setNTarefa({
            titulo: '',
            setor: '',
            descricao: '',
            responsavel: '',
        })
    }

    const captura = (e) =>{

        //Executando o destructed
        const{name,value} = e.target

        //Criando uma estrutura de decisão para saber qual campo que realizou a digitação
        if(name === 'titulo'){
            setNTarefa({titulo: value, setor: nTarefa.setor, descricao: nTarefa.descricao, responsavel: nTarefa.responsavel,})
        } else if(name === 'setor'){
            setNTarefa({titulo: nTarefa.titulo, setor: value, descricao: nTarefa.descricao, responsavel: nTarefa.responsavel,})
        } else if(name === 'descricao'){
            setNTarefa({titulo: nTarefa.titulo, setor: nTarefa.setor, descricao: value, responsavel: nTarefa.responsavel,})
        } else if(name === 'responsavel'){
            setNTarefa({titulo: nTarefa.titulo, setor: nTarefa.setor, descricao: nTarefa.descricao, responsavel: value,})
        }
    }

    const removerTarefa = (tar) =>{
        let lista = tarefa
        lista = lista.filter((t)=> t!== tar)
        setTarefa(lista)
    }


    return (
        <>
            <DivLista>
                <FormTarefas addTarefa={addTarefa} tarefa={nTarefa} digit={captura}/>
                {tarefa.map((tar,i)=>(
                    <Tarefas
                        key={i}
                        titulo={tar.titulo}
                        setor={tar.setor}
                        descricao={tar.descricao}
                        responsavel={tar.responsavel}
                        remove={removerTarefa.bind(this, tar)}
                    />
                ))}
            </DivLista>
        </>
    )
}

//<button onClick={addTarefa}>Adicionar Tarefa</button>