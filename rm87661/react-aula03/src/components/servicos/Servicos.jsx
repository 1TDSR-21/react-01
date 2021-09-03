import React from 'react'
import devImg from '../img/desenvolvimento.jpg'
import cursosImg from '../img/cursos.png' 
import eventosImg from '../img/eventos.jpg'
import segInfoImg from '../img/seguranca-info.png'

export default function Servicos(){
    return (
        <section id="servicos">
            <h2>Serviços</h2>
            <div>
                <img src={devImg} alt="icones de computadores"/>
                <h3>Desenvolvimento</h3>
                <p>Realizamos os serviço de desenvolvimento Web com as melhores Tecnologias do mercado.</p>
            </div>
            <div>
                <img src={cursosImg} alt="icone diversos cursos"/>
                <h3>Cursos</h3>
                <p>Oferecemos Minicursos remotos, para as linguagens que estão em alta na Web hoje.</p>
            </div>
            <div>
                <img src={eventosImg} alt="Fones de ouvido"/>
                <h3>WorkShops</h3>
                <p>Produzimos Workshops para todo o país.</p>
            </div>
            <div>
                <img src={segInfoImg} alt="Jogo de palavras"/>
                <h3>Segurança da informação</h3>
                <p>Criamos projetos de INFORMATION SECURITY para grandes empresas, consulte nos.</p>
            </div>
        </section>
    )
}