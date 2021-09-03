import React, { useState } from 'react'
import Itens from './itens/itens'
import ImgReact from '../img/react.png'
import '../Corpo.css'

export default function Corpo() {

    //declarando o UseState
    const [valorState, setValorState] = useState(5)
    
    //declarando a variável
    let valorVariavel = 5

    //função responsável por executar o incremento tanto no useState como na variável.

    const aumentar = ()=>{
        //Aqui estamos passando um valor somado ao valor do useState para a função set.
        setValorState(valorState+5)

        //Aqui utilizando o autoincremento das variáveis.
        valorVariavel += 5
    }

    return(
        <section>
            <div className="corpo">
                <h3>Introdução ao React</h3>
                <img src={ImgReact} alt="logo"></img>
                
                <h2>Exemplos de [USE-STATE]</h2>
               
                <div className="exemplo-1">
                    <p>ValorState:{valorState} </p>
                    <p>Variável:{valorVariavel} </p>
                    <h3>Use state é um Hooke de React!</h3>
                    <button onClick={() => aumentar()}>AUMENTAR</button>

                    <Itens valor={valorState} plus={aumentar}/>
                </div>
                
            </div>
        </section>
    )
}