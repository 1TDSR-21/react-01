import React from 'react'
import Header from './components/Header'
import Corpo from './components/Corpo'
import Footer from './components/Footer'
import './App.css'

export default function App() {
    return(
        <div className="container">
            <Header />
            <Corpo />
            <Footer />
        </div>
    )
}