import React, {Component} from 'react'
import '../styles/index.scss'
import List from './List'

const title = 'My Minimal React Webpack Babel Setup';

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <h1>{title}</h1>
        <List/>
      </div>
    )
  }
}