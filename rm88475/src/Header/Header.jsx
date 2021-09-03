import React, { useState } from 'react'
import Servicos from '../Servicos/Servicos';
import Sobre from '../Sobre/Sobre';
import Fotos from '../Fotos/Fotos';
import Contato from '../Contato/Contato';
import Topo from '../Topo/Topo';


export default function Header(){
    const [componente, setComponente] = useState(<Sobre/>)
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><a href="#sobre" onClick={() => setComponente(<Sobre/>)}>Sobre</a></li>
                    <li><a href="#servicos" onClick={() => setComponente(<Servicos/>)}>Serviço</a></li> 
                    <li><a href="#fotos" onClick={() => setComponente(<Fotos/>)}>Imagens</a></li>   
                    <li><a href="#contato" onClick={() => setComponente(<Contato/>)}>Contato</a></li> 
                </ul>
            </nav>
            <Topo/>
        </header>
        <div>
            {componente}
        </div>
        </>
    )
};

