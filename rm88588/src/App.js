import './App.css';

function App() {
  const andre = {
    turma: '1TDSR',
    nome: 'André Hugo Bastos da Silva',
    rm: 'RM88588',
  };

  return (
    <div className='App'>
      <div>
        {Object.keys(andre).map((property) => {
          return <p>{andre[property]}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
