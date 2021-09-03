import React from 'react'
import Corpo from './components/corpo/Corpo'
import './App.css'
import Header from './components/header/Header'
import Footer from './footer/Footer'

export default function App() {
    return (
        <div className="container">
            <Header/>
            <Corpo/>
            <Footer/>
        </div>
    )
}