import React, {useState} from 'react'


export default function Semaforo() {
    const [mensagem, setMensagem] = useState('PARE')

    function trocar(){
        if (mensagem === 'PARE'){
            setMensagem('AGUARDE')
        }
        else if (mensagem === 'AGUARDE'){
            setMensagem('SIGA')
        } else{
            setMensagem('PARE')
        }
    }
        return (
            <>
                {/*<h2 style={{color:'red'}}>PARE</h2>
                <h2 style={{color:'orange'}}>ATENÇÃO</h2>
                <h2 style={{color:'green'}}>SIGA</h2>*/}

                <h2>{mensagem}</h2>
                <button onClick={trocar}>Clique para Trocar</button>
            </>
        )
}
