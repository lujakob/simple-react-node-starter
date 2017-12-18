import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import ListPage from './ListPage'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import BeerPage from './BeerPage'
import Header from './Header'

import '../styles/index.scss'

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/list" component={ListPage}/>
          <Route path="/beer" component={BeerPage}/>
        </Switch>
      </div>
    )
  }
}