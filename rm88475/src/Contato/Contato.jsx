import React from 'react'
import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'

export default function Contato(){
    return(
        <section id="contato">
            <h2>Contato</h2>
            <p>Fale conosco</p>
            <div>
                <img src={iconTel} alt="Telefone"/>
                <p><a href="tel:1183487238">(11)8348-7238</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email"/>
                <p><a href="rm88475@fiap.com.br">rm88475@fiap.com.br</a></p>
            </div>
        </section>
    )
}