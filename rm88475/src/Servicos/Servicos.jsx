import React from 'react'
import devImg from '../img/desenvolvimento.jpg'
import cursosImg from '../img/cursos.png'
import eventosImg from '../img/eventos.jpg'
import segurancaInfoPng from '../img/seguranca-info.png'

export default function Servicos() {
    return (
        <section id="servicos">
            <h2>Servicos</h2>
            <div>
                <img src={devImg} alt="Icones de computadores" />
                <h3>Desenvolvimento</h3>
                <p>
                    Realizamos o serviço de desenvolvimento Web com as melhores Tecnologias do Mercado
                </p>
            </div>
            <div>
                <img src={cursosImg} alt="Foto de notebook" />
                <h3>Cursos</h3>
                <p>
                    Oferecemos Minicursos remotos, para as linguagens que estão em alta na Web hoje.
                </p>
            </div>
            <div>
                <img src={eventosImg} alt="Fone de ouvido" />
                <h3>Workshops</h3>
                <p>
                   Produzimos Workshops para todo o país.
                </p>
            </div>
            <div>
                <img src={segurancaInfoPng} alt="Texto sobre seguranca" />
                <h3>Seguranca da informação</h3>
                <p>
                    Criamos projetos de INFORMATION SECURITY para grandes empresas.
                </p>
            </div>
        </section>
    )
}