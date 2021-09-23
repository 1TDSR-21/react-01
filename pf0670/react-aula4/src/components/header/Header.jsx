import React from 'react'
import { Navbar, HoverEl } from '../../styled'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {

    const [fonte, setFonte] = useState(10)

    const [fundo, setFundo] = useState(true)



    return (
        <header>
            <h2>STYLED-COMPONENTS</h2>
            <Navbar>
                <ul>
                    <li><HoverEl fontSize={fonte} onClick={() => setFonte(fonte + 1)}><Link to='/home'>Home</Link></HoverEl></li>
                    <li><HoverEl backgroundColor={fundo === true ? '#ff0000' : '#0000ff'} onClick={() => setFundo(fundo == true ? false : true)}><Link to='/sobre'>Sobre</Link></HoverEl></li>
                    <li><HoverEl>Dicas</HoverEl></li>
                    <li><HoverEl>Tutoriais</HoverEl></li>
                </ul>
            </Navbar>
        </header>
    )
}
