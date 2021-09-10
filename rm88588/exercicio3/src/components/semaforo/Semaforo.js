import React, { useState } from "react";
import "./Semaforo.css";

export default function Semaforo() {

  const [sinal, setSinal] = useState(0);

  const alternarSinal = () => {
    if(sinal === 0) {
      document.getElementById("atencao").style.visibility = 'visible';
      document.getElementById("siga").style.visibility = 'hidden';
      document.getElementById("pare").style.visibility = 'hidden';
      setSinal(1);
    } else if(sinal === 1) {
      document.getElementById("atencao").style.visibility = 'hidden';
      document.getElementById("siga").style.visibility = 'hidden';
      document.getElementById("pare").style.visibility = 'visible';
      setSinal(2)
    } else {
      document.getElementById("atencao").style.visibility = 'hidden';
      document.getElementById("siga").style.visibility = 'visible';
      document.getElementById("pare").style.visibility = 'hidden';
      setSinal(0);
    }
  }

  return(
    <div>
      <h2 id="siga">Siga</h2>
      <h2 id="atencao">Atenção</h2>
      <h2 id="pare">Pare</h2>
      <button onClick={() => alternarSinal()}>Trocar</button>
    </div>
  )
}