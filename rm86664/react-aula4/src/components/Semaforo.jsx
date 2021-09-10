import React, {useState} from 'react';


export default function Semaforo() {

    const [luz, setLuz] = useState(0)

    const mudarLuz = ()=>{
        if (luz === 0){return setLuz(1)}
        if (luz === 1){return setLuz(2)}
        if (luz === 2){return setLuz(0)}
    }

  return(
    <div>
        <h2>Semáforo: </h2>
            {luz===0 && <h2 className = "pare">Pare</h2> }
            {luz===1 && <h2 className = "atencao">Atenção</h2> }
            {luz===2 && <h2 className = "siga">Siga</h2> }
            <br/>
            <button onClick={()=>mudarLuz()}>Mudar</button>
    </div>
  ) 
}

