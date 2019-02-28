import React, { Component } from "react"
//import "./header.scss"

const menuItems = ['Quienes Somos', 'Servicios', 'Portfolio', 'Contactanos']

class Menu extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return(
            <div className="nav-menu-wrapper">
            {menuItems.map((value, i) => {
                 return (
                    <div className="nav-menu-item" key={i}>
                        <div className="nav-menu-item--title">{value}</div>
                        <div className="nav-menu-item--bar"></div>
                    </div>
                    )}
                )}
            </div>
        )
    }
}

Menu.defaultProps = {
  title: 'test',
}

export default Menu