import React from 'react'
import './App.css'
import Corpo from './components/Corpo'

const App = () => {

    const paragrafo = {
        backgroundColor: '#ff0000',
        padding: '5%',
        textAlign: 'justify',
        fontFamily: 'Verdana'
    }



    return (
        <>
            <Corpo estilo = {paragrafo}/>
        </>
 
    )
}
export default App
