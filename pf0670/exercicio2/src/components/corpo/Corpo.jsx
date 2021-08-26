import React, { useState } from 'react'
import imgLogoReact from '../img/logo192.png'
import './Corpo.css'

export default function Corpo() {

    //Declarando o UseState
    const [valorState, setValorState] = useState(5)
    //Declarando a variável
    let valorVariavel = 5

    //Função responsável por executar o incremento tanto no useState como na
    //variável.
    const aumentar = () => {
        //Aqui estamos passando um valor somado ao valor do state para a
        // a função set.
        setValorState(valorState + 5)

        //Aqui utilizando o autoincremento das variáveis.
        valorVariavel += 5
    }

    return (
        <section>
            <h2>Aprendendo REACT!?</h2>
            <img src={imgLogoReact} alt="Logo React" />

            <h2>Exemplos de [USE-STATE]</h2>

            <div className="exemplo-1">
                <p>ValorState :{valorState}</p>
                <p>Variável   :{valorVariavel}</p>
                <h3>Use state é um Hooke de React!</h3>
                <button onClick={() => aumentar()}>AUMENTAR</button>
            </div>

        </section>
    )
}
