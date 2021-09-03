import React from 'react'
import Corpo from './components/Corpo'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import './Footer.css'


const App = () => {
    return(
        <div className="container">
            <Header/>
            <Corpo/>
            <Footer/>

        </div>
    )
}

export default App