import iconTel from '../img/tel.png'
import iconEmail from '../img/mail.png'

export function Contato() {
    return (
        <section id="contatos">
            <h2>Contatos</h2>
            <p>Fale Conosco</p>
            <div>
                <img src={iconTel} alt="Telefone" />
                <p><a href="tel:11987654321">(11) 97856-4567</a></p>
            </div>
            <div>
                <img src={iconEmail} alt="Email" />
                <p><a href="mailto:rm89347@fiap.com.br">rm89347@fiap.com.br</a></p>
            </div>
        </section>
    )
}