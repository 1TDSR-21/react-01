import React from 'react'
import imgLogoReact from '../img/logo192.png'
import './Corpo.css'

export default function Corpo() {
    return (
        <section>
            <h2>Aprendendo REACT!?</h2>
            <img src={imgLogoReact} alt="Logo React" />
            <div>
                <p>React é bom porque!?</p>
                <p>FAST!</p>
                <p>BEST!</p>
                <p>EASY!</p>
            </div>
        </section>
    )
}
