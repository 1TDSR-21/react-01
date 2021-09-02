import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'


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