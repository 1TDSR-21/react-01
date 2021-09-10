import React from "react";
import "./Semaforo.css";

export default function Semaforo() {

  return(
    <div>
      <h2 id="siga">Siga</h2>
      <h2 id="atencao">Atenção</h2>
      <h2 id="pare">Pare</h2>
      <button onClick={() => {
        if(document.getElementById("siga").style.visibility !== 'hidden') {
          console.log('testando')
          document.getElementById("atencao").style.visibility = 'visible';
          document.getElementById("siga").style.visibility = 'hidden';
          document.getElementById("pare").style.visibility = 'hidden';
        } else if (document.getElementById("atencao").style.visibility !== 'hidden') {
          document.getElementById("atencao").style.visibility = 'hidden';
          document.getElementById("siga").style.visibility = 'hidden';
          document.getElementById("pare").style.visibility = 'visible';
        } else {
          document.getElementById("atencao").style.visibility = 'hidden';
          document.getElementById("siga").style.visibility = 'visible';
          document.getElementById("pare").style.visibility = 'hidden';
        }
      }}>Trocar</button>
    </div>
  )
}