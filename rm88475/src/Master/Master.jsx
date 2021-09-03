import React from 'react'
import Header from '../Header/Header'
import Sobre from '../Sobre/Sobre'
import Servicos from '../Servicos/Servicos'
import Fotos from '../Fotos/Fotos'
import Footer from '../Footer/Footer'

export default function Master() {
    return (
        <>
            <div className="container">
                <h2>O SITE</h2>
                <Header />
                <Sobre/>
                <Servicos/>
                <Fotos/>
                <Footer/>
            </div>
        </>
    )
};

