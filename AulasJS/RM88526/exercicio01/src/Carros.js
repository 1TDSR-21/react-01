import carro from './carro.jpg';

function Carros(){
    return (
        <div className="Carros">
            <header className="CarrosHeader">
            <img src={carro} className="carro" alt="carro" width="30%"/>
                <h1>Os cinco modelos de carro:</h1>
                <ul>
                    <li>Mustang Shelby Cobra</li>
                    <li>Ford F1</li>
                    <li>Chevrolet Camaro</li>
                    <li>Maverick</li>
                    <li>Galaxie</li>
                </ul>              
            </header> 
        </div>
    );
}

export default Carros;