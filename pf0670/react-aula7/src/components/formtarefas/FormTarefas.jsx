import React from 'react'

export default function FormTarefas(props) {
    return (
        <div>
            <form method="post" onSubmit={props.addTarefa}>
                <fieldset>
                    <legend>ADICIONAR TAREFAS</legend>
                    <div>
                        <input type="text" name="titulo" placeholder="Título" value={props.tarefa.titulo} onChange={props.digit} />
                    </div>
                    <div>
                        <input type="text" name="setor" placeholder="Setor" value={props.tarefa.setor} onChange={props.digit} />
                    </div>
                    <div>
                        <textarea name="descricao" cols="30" rows="10" placeholder="Descrição" value={props.tarefa.descricao} onChange={props.digit} ></textarea>
                    </div>
                    <div>
                        <input type="text" name="responsavel" placeholder="Responsável" value={props.tarefa.responsavel} onChange={props.digit} />
                    </div>
                </fieldset>
                <div>
                    <button type="submit">ADD-POST/IT</button>
                </div>
            </form>
        </div>
    )
}
