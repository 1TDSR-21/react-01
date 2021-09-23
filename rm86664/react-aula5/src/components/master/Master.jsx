import React from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import { HtmlRoot, Container } from '../../styled'
import { Router, Switch } from 'react-router'


export default function Master() {
    return (
        <HtmlRoot>
            <Container>
                <Header/>
                <Home/>
                <Switch>
                        <Router path='/' component={Home}/>
                        <Router path='/home' component={Home}/>
                </Switch>
                
            </Container>
        </HtmlRoot>
    )
}
