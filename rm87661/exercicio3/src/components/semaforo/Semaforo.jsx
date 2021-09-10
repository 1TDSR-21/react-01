import React, {useState} from 'react'
import '../semaforo/Semaforo.css'


export default function Semaforo() {

    const [sinal, setSinal] = useState(0);

    const alteraSinal = () => {

        if(sinal === 0) {
            document.getElementById("pare").style.visibility = 'visible';
            document.getElementById("atencao").style.visibility = 'hidden';
            document.getElementById("siga").style.visibility = 'hidden';
            setSinal(1)
        }

        else if(sinal === 1) {
                document.getElementById("pare").style.visibility = 'hidden';
                document.getElementById("atencao").style.visibility = 'visible';
                document.getElementById("siga").style.visibility = 'hidden';
                setSinal(2)
            }

        else {
            document.getElementById("pare").style.visibility = 'hidden';
            document.getElementById("atencao").style.visibility = 'hidden';
            document.getElementById("siga").style.visibility = 'visible';
            setSinal(0)
        }
    }

    return (
        <div>
            <h2 id="pare">PARE</h2>
            <h2 id="atencao">ATENÇÃO</h2>
            <h2 id="siga">SIGA</h2>
            <button onClick={() => alteraSinal()}>TROCAR</button>
        </div>
    )
}