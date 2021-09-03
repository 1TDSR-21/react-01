import React from 'react'
import logoTurma from '../img/logo-1tdsr.jpg'
export default function LiastaAlunos(){
    return(
        <div>
            <ul>
                <li><img src={logoTurma} width='10%'/> - Yury Silva</li>
                <li><img src={logoTurma} width='10%'/> -Jennifer Silva</li>
                <li><img src={logoTurma} width='10%'/> -Marcilene Silva</li>
                <li><img src={logoTurma} width='10%'/> -Iracema Silva</li>
            </ul>
        

        </div>
    );
}