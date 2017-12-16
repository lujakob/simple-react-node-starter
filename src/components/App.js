import React, {Component} from 'react'
import '../styles/index.scss'

const title = 'My Minimal React Webpack Babel Setup';

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <h1>{title}</h1>
      </div>
    )
  }
}