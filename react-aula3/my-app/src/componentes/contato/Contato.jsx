import React from 'react'
import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'

export default function Contato() {
    return (
        <section id="contatos">
            <h2>Contatos</h2>
            <p>Fale Conosco</p>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel:11995613912">(11) 99561-3912</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto:profalexandre.jesus@fiap.com.br">leonardo.oliv182@gmail.com</a></p>
            </div>
        </section>
    )
}