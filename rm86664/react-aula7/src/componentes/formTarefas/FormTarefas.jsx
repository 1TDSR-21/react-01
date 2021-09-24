import React from 'react'
import styled from 'styled-components'

const DivForm = styled.div`
    width: 100%;
    height: 300px;
    padding: 20px;
    background-color:rgba(51, 81, 255,0.3);

    form{font-family:Montserrat; width:50%; margin:auto;}
    form input, form textarea{padding:5px; width:80%;}
    form textarea{height: 80px;}
    form button{font-family:Montserrat; margin-top:15px; padding:10px; background: rgba(112,231,59,0.6); color: #fff;}
`;


export default function FormTarefas(props) {
    return (
        <DivForm>
            <form method="post" onSubmit={props.addTarefa}>
                <fieldset>
                    <legend>Adicionar Tarefas</legend>
                    <div>
                        <input type="text" name="titulo" placeholder="Título" value={props.tarefa.titulo} onChange={props.digit} />
                    </div>
                    <div>
                        <input type="text" name="setor" placeholder="Setor"
                        value={props.tarefa.setor} onChange={props.digit} />
                    </div>
                    <div>
                        <textarea name="descricao" cols="30" rows="10" placeholder="Descrição" value={props.tarefa.descricao} onChange={props.digit}></textarea>
                    </div>
                    <div>
                        <input type="text" name="responsavel" placeholder="Responsável"
                        value={props.tarefa.responsavel} onChange={props.digit}/>
                    </div>
                   
                </fieldset>
                <div>
                    <button type="submit">Adicionar Post-it</button>
                </div>
            </form>
        </DivForm>
    )
}