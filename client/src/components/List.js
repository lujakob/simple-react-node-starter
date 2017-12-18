import React, {Component} from 'react'
import '../styles/index.scss'

const API = 'http://localhost:3000'
const DEFAULT_QUERY = '/list'

export default class List extends Component {

  state = {
    list: []
  }

  componentWillMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ list: data }));
  }

  render() {
    return (
      <div className="list">
        <ul>
          {this.state.list.map((el, key) => <li key={key}>{el.title}</li>)}
        </ul>
      </div>
    )
  }
}