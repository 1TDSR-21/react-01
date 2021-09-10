import React, {useState} from 'react'
import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'

export default function Contato() {

    const [dados, setDados] = useState({'telefone': '' , 'email': '' })

    const alteraDados = (e) =>{
        //Executando uma desestruturação
        const {name, value} = e.target
        
        if(name === 'telefone'){
            setDados({'telefone': value , 'email': dados.email})
        }

        else if(name === 'email'){
            setDados({'telefone': dados.telefone , 'email': value})
        }
    
    }


    return (
        <section id="contato">
            <h2>Contatos</h2>
            <p>Fale Conosco</p>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel:11922224444">(11) 92222-4444</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto:enzo.sugi@gmail.com">enzo.sugi@gmail.com</a></p>
            </div>

            <div>
                <h2>Preencha seus dados:</h2>
                Tel:<input type="text" name="telefone" onChange={alteraDados}/> <br/>
                Email:<input type="text" name="email" onChange={alteraDados}/> <br/>
            </div>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel: "{...dados.telefone}>{dados.telefone}</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto: "{...dados.email}>{dados.email}</a></p>
            </div>
            
        </section>
    )
}


// const [frase, setFrase] = useState('')

{/* <div>
<p>Exemplo de Eventos com Inputs</p>
<h2>Vamos escrever uma frase motivadora!</h2>
<div>
    <label>MOTIVAÇÃO:</label>
    <input type="text" onChange={(e)=> setFrase(e.target.value)}/>
    <p>Motivação do dia criada por mim: {frase}</p>
</div>
</div> */}