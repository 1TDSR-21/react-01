import logo from './logo.svg';
import './App.css';
import Cabecalho from './Componetes/Cabecalho';
import Carros from './Componetes/Carros';
import Parceiros from './Componetes/Parceiros'

function App() {

  const listaCarros = ['Jaguar ', 'X-1 ', 'Uno ', 'Porsche ', 'Comodoro ', 'XR1 ']
  const listaSonho = 'MINHA-LISTA'
  // Passando uma função como atributo
  const maisCarros = () => 'Gol'

  const multDoisValores = (a, b) => a * b

  return (
    <div className="App">
      <Cabecalho/>
      <Carros carrosAttrib={listaCarros}
      carrosAttribTitulo={listaSonho} 
      insereCarro = {maisCarros}      />
      <Parceiros resolucaoEx = {multDoisValores}/>
    </div>
  );
}

export default App;
