import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class HomeNavLink extends Component {
  render() {
    return (
      <NavLink className="list-group-item" {...this.props} />
    )
  }
}
