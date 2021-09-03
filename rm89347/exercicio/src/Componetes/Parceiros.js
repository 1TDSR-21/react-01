import React from 'react'

export default function Parceiros(props) {
    return(
        <div>
            <h2>Parceiros</h2>
            <span>{props.resolucaoEx(10, 20)}<br/></span>
            
            <a href="#">Porche <br/></a>
            <a href="#">Ford <br/></a>
            <a href="#">Ferrari <br/></a>
            <a href="#">Lamborguini</a>
        </div>
    )
}