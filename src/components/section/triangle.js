import React, { Component } from "react"
import "./triangle.scss"

const menuItems = ['Quienes Somos', 'Servicios', 'Portfolio', 'Contactanos']

class Menu extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return(
            <div className="section--triangle">
            </div>
        )
    }
}

export default Menu