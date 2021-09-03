import React from 'react'
import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'


export default function Contato() {
    return (
        <section id="contato">
            <h2>Contatos</h2>
            <p>Fale Conosco</p>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel:11922224444">(11) 92222-4444</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Telefone" />
                <p><a href="mailto:enzo.sugi@gmail.com">enzo.sugi@gmail.com</a></p>
            </div>
        </section>
    )
}