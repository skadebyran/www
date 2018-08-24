import React from 'react'
import Link from 'gatsby-link'

import Logotype from './Logotype'

import './Navbar.module.sass'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <Link to="/" className="navbar-logotype">
        <Logotype type="light" />
      </Link>
      <div className="navbar-end">
        <Link className="navbar-item" to="/services">
          Våra tjänster
        </Link>
        <Link className="navbar-item" to="/founder">
          Grundare
        </Link>
        <Link className="navbar-item" to="/cv">
          CV
        </Link>
        <Link className="navbar-item" to="/contact">
          Kontakt
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
