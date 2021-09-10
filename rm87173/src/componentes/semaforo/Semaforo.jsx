import React from 'react'
import Semaforo from './componentes/semaforo/semaforo.css'

export default function semaforo(){
    return (
        <div id="semaforo">
            <h2 className="Vermelho">Pare!</h2>
            <h2 className="Amarelo">Atenção!</h2>
            <h2 className="Verde">Siga!</h2>
            <Semaforo/>
        </div>
    )
}