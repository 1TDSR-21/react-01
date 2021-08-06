import React from 'react'
import Cayman from '../img/cayman.jpg'
import Corvette from '../img/corvette.png'
import Ford_GT from '../img/ford_gt.jpg'
import Gallardo from '../img/galardo.png'
import Murcielago from '../img/murcilago.png'
import Mustang from'../img/mustang_gt.jpg'

export default function ListaAlunos(){
    return(
        <div>
            <ul>
                <li><img src={Cayman} width="10%"/> - Porche Cayman</li>
                <li><img src={Corvette} width="10%"/> - Corvette</li>
                <li><img src={Ford_GT} width="10%"/> - Ford GT</li>
                <li><img src={Gallardo} width="10%"/> - Lamborghini Gallardo</li>
                <li><img src={Murcielago} width="10%"/> - Lamborghini Murciélago</li>
                <li><img src={Mustang} width="10%"/> - Mustang</li>
            </ul>
        </div>
    );
}