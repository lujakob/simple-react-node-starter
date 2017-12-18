import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'

export default () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <nav className="nav navbar-nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/beer">Beer</Link>
          </li>
        </nav>
      </Navbar.Collapse>
    </Navbar>
  )
}