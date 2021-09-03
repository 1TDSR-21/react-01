import React from 'react'
import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'

export default function Contato() {

    return (
        <section id="contato">
            <h2>Contato</h2>
            <p>Fale conosco</p>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel:11940028922">(11) 94002-8922</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto:yurysilva74@gmail.com">yurysilva74@gmail.com</a></p>
            </div>
        </section>
    )
}