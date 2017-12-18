import React, {Component} from 'react'
// https://www.opengov-muenchen.de/tl/dataset/oktoberfest/resource/56a0c3c8-c2ea-4b42-bbd2-21cb72d80803

const API = 'http://localhost:3000'
const DEFAULT_QUERY = '/beers'

class BeerPage extends Component {
  state = {
    beers: []
  }

  componentWillMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ beers: data }));
  }

  render () {
    return (
      <div className="beer-page">
        <h1>Beer page</h1>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Visitors</th>
              <th>Consumption</th>
            </tr>
          </thead>
          <tbody>
          {this.state.beers.map((el, index) => (
            <tr key={index}>
              <td>{el.year}</td>
              <td>{el.visitors}</td>
              <td>{el.consumption}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default BeerPage