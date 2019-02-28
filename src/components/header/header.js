import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "./header.scss"
import logo from "./../../images/logo.svg"
import Menu from "./menu.js"

class Header extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <header className="header">
        <div className="nav-logo">
          <img src={logo}/>
        </div> 
        <Menu/>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header