import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Carros from './componentes/Carros';
import Parceiros from './componentes/Parceiros';

export default function App() {

  //criando array/vetor de veículos para que sejam enviados para o componente
  const listaCarros = ['Jaguar', 'X-1', 'Uno','Porshe','Comodoro','XR1']

  //criando um atributo simples em String.
  const listaSonho = 'MINHA-LISTA'

  //Passando uma função como atributo
  const maisCarros = ()=> 'Gol'

  //função para multiplicar dois numeros
  
  const multiplica = (num1, num2) => num1 * num2 

  return (
    <div className="App">
        <Cabecalho/>
        <Carros carrosAttrib={listaCarros}
        carrosAttribTitulo={listaSonho} insereCarro={maisCarros}/>
        <Parceiros calculo={multiplica}/>
    </div>
  );
}


