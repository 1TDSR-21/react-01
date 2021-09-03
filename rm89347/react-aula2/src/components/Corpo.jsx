import React from 'react'

export default function Corpo(props) {
    return (
        <div className="container" >
        <h1 className = "font-s">Conteúdo App.jsx</h1>
        <p className = "font-s"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid ipsum unde placeat amet dolores blanditiis fugiat officia quaerat rem, 
        veniam expedita iure molestias aliquam fuga sequi, facilis illum! Quia, deserunt!</p>

        <p style={{
            fontSize: '0.9em',
            textAlign: 'center'
        }}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid ipsum unde placeat amet dolores blanditiis fugiat officia quaerat rem, 
        veniam expedita iure molestias aliquam fuga sequi, facilis illum! Quia, deserunt!</p>

        <p style={props.estilo}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid ipsum unde placeat amet dolores blanditiis fugiat officia quaerat rem, 
        veniam expedita iure molestias aliquam fuga sequi, facilis illum! Quia, deserunt!</p>

        <p className = "font-s"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid ipsum unde placeat amet dolores blanditiis fugiat officia quaerat rem, 
        veniam expedita iure molestias aliquam fuga sequi, facilis illum! Quia, deserunt!</p>
    </div>
    )
}