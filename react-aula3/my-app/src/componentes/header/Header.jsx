import React, { useState } from 'react'
import Contato from '../contato/Contato'
import Fotos from '../fotos/Fotos'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'
import Topo from '../topo/Topo'

export default function Header() {

    const [componente, setComponente] = useState(<Sobre />)


    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="#sobre" onClick={() => setComponente(<Sobre />)}>Sobre</a></li>
                        <li><a href="#servicos" onClick={() => setComponente(<Servicos />)}>Serviço</a></li>
                        <li><a href="#fotos" onClick={() => setComponente(<Fotos />)}>Imagens</a></li>
                        <li><a href="#contato" onClick={() => setComponente(<Contato />)}>Contato</a></li>
                    </ul>
                </nav>
                <Topo />
            </header>
            <div>
                {componente}
            </div>
        </>
    )
}