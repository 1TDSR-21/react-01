import React from 'react'
import './App.css'
import Corpo from './components/corpo/Corpo'
import Header from './components/header/Header'
import Footer from './footer/Footer'

const App = () => {
    return (
        <div className="container">
            <Header />
            <Corpo />
            <Footer />
        </div>
    )
}

export default App