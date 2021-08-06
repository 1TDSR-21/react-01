import React from 'react';
import Carros from './Carros'
import Parceiros from './Parceiros';


export default function Cabecalho(){
    return(
        <header>
            <h1>Exercício</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dignissimos, iure earum minus at sequi delectus impedit veritatis explicabo dolorem quasi et ea autem mollitia quaerat vel totam cumque tenetur.
            </p>

            <Carros/>

            <Parceiros/>
        </header>
    );
}