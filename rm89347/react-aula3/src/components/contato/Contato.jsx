import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'
import { useState } from 'react'

export function Contato() {
    const [dados, setDados] = useState({ 'telefone': '', 'email': '' })

    const alteraDados = (e) => {
        //Executando uma desestruturação
        const { name, value } = e.target

        if (name === 'telefone') {
            setDados({ 'telefone': value, 'email': dados.email })
        } else if (name === 'email') {
            setDados({ 'telefone': value, 'email': dados.email })
        }
    }

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

            <div>
                <h2>Preencha seus dados:</h2>
                Tel  :<input type="text" name="telefone" /> <br />
                Email:<input type="text" name="email" /> <br />
            </div>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel:"{...dados.telefone}>{dados.telefone}</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto:"{...dados.email}>{dados.email}</a></p>
            </div>

        </section >
    )
}