import React from 'react'

export default function Corpo() {

    const paragrafo = {
        backgroundColor:'#ff0000',
        padding: '5%',
        textAling:'justify',
        fontFamily: 'Verdana'
    }


    return (
        <div>
            <h1 className="font-s">Conteúdo de App.jsx</h1>
            <p className="font-s">Exemplo de aplicação de Classes no JSX!</p>
            <p style={{fontSize:'1em', textAlign: 'center'}}>E falavam que o CSS INLINE era a Black-Sheep!!</p>
            <p style={paragrafo}>Renascido das Cinzas</p>
        </div>
    )
}
    
    
