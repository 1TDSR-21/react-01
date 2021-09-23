import React from 'react'
import { HoverEl, Navbar } from '../../styled'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h2>STYLED-COMPONENTS</h2>
            <Navbar>
                <ul>
                    <li><HoverEl><Link to='/home'> Home </Link></HoverEl></li>
                    <li><HoverEl>Sobre</HoverEl></li>
                    <li><HoverEl>Dicas</HoverEl></li>
                    <li><HoverEl>Tutoriais</HoverEl></li>
                </ul>
            </Navbar>
        </header>
    )
}
