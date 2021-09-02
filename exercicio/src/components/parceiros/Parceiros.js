import React from 'react'

export default function Parceiros(props) {

  let nr1 = 10
  let nr2 = 10

   return(
      <>
        <h2>Conheça nossos parceiros!</h2>

        <span>O Resultado do cálculo é : {props.calculo(nr1,nr2)}</span>
        
        <p><a href="#">Ford</a></p>
        <p><a href="#">FIAT/Crysler</a></p>
        <p><a href="#">GM</a></p>
        <p><a href="#">NISSAN</a></p>
      </>
)}