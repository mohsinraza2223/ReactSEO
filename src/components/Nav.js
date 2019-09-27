import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <ul>
        <li> <NavLink to='/' >Page1</NavLink></li>
        <li><NavLink to='/page2' >page2</NavLink></li>
        </ul> 
      </div>
    </nav>
        )
    }
}
