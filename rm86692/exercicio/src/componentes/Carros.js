import React from "react" // importando a biblioteca do react

import banner from "../img/porsche-normal.jpg"

export default function Carros() {

    return(
        <div>
            <img src={banner}></img>
            <ul>
                <li>Porsche 911 Turbo S</li>
                <li>Lamborghini Aventador SV</li>
                <li>Ferarri 458 Italia</li>
                <li>Fusca</li>
                <li>Batmóvel</li>
            </ul>
        </div>
    )
}