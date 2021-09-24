import React from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import Sobre from '../sobre/Sobre'
import { HtmlRoot, Container } from '../../styled'
import { Route, Switch } from 'react-router-dom'


export default function Master() {
    return (
        <HtmlRoot>
            <Container>
                <Header />
                <Home />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/sobre" component={Sobre} />
                </Switch>

            </Container>
        </HtmlRoot>
    )
}
