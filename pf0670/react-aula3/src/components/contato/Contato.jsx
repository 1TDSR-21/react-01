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
                <p><a href="tel:11978564567">(11) 97856-4567</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto:profalexandre.jesus@fiap.com.br">profalexandre.jesus@fiap.com.br</a></p>
            </div>
        </section>
    )
}
