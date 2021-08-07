import './App.css';

import Cabecalho from './componentes/Cabecalho';
import Carros from './componentes/Carros';
import Parceiros from './componentes/Parceiros';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Carros/>
      <Parceiros/>
    </div>
  );
}

export default App;
