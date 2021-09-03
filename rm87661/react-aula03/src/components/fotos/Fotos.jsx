import React from 'react'
import backImg from '../img/backbone.jpg'
import cityImg from '../img/cidade.jpg'
import comImg from '../img/comunicao.jpg'
import icoImg from '../img/icones.png'
import webImg from '../img/internet.jpg'
import netImg from '../img/rede.jpg'


export default function Fotos() {
    return (
        <section id="fotos">
            <h2>Imagens</h2>
            <img src={backImg} alt="Rede de computadores" />
            <img src={cityImg} alt="Cidade" />
            <img src={comImg} alt="Rede de fios" />
            <img src={icoImg} alt="Icones" />
            <img src={webImg} alt="Internet" />
            <img src={netImg} alt="Rede Virtual" />

        </section>
    )
}