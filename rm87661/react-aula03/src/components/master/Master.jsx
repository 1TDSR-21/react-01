import React from 'react'
import Contato from '../contato/Contato'
import Footer from '../footer/Footer'
import Fotos from '../fotos/Fotos'
import Header from '../header/Header'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'

export default function Master() {

    return (
        <div className="container">
            <h2>O SITE</h2>
            <Header/>
            {/*<Header/>
            <Sobre/>
            <Servicos/>
            <Fotos/>
            <Contato/>
            <Footer/> 
            */}
        </div>
    )
}