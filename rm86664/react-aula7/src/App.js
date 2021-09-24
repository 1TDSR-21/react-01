import React from 'react'
//import { GrReactjs as LogoReactIcon } from "react-icons/gr";
import ListaTarefas from './componentes/listaTarefas/ListaTarefas';
import Menu from './componentes/menu/Menu'
import Home from './componentes/home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = ()=> {
    return (
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/tarefa' component={ListaTarefas}/>
            </Switch>
        </BrowserRouter>  
    )
}
export default App

//<div>
//<h1><LogoReactIcon/> App.js <LogoReactIcon/></h1>
//<ListaTarefas/>
//</div>