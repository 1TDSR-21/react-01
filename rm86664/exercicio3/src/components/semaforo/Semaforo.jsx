import React, { useState } from "react";


export default function Semaforo() {

  const [luz, setLuz] = useState(0)

    const mudarLuz = ()=>{
        if (luz === 0){return setLuz(1)}
        if (luz === 1){return setLuz(2)}
        if (luz === 2){return setLuz(0)}
    }

  return (
    <>
    <h1>Semáforo</h1>
        {
          luz === 0?
          <h3 style={{fontSize:'4rem', color:"red"}}>Pare</h3> : 
          <h3>Pare</h3> 
        }
        {
          luz === 1?
          <h3 style={{fontSize:'4rem', color:"yellow"}}>Atenção</h3> : 
          <h3>Atenção</h3> 
        }
        {
          luz === 2?
          <h3 style={{fontSize:'4rem', color:"green"}}>Siga</h3> : 
          <h3>Siga</h3> 
        }
              
      <div className="botao">
        <button onClick={()=>mudarLuz()}>Mudar</button>
      </div>
    </>
  );
}