import React, { Component } from 'react'
import {Route,Redirect, Switch} from 'react-router-dom'
import HomeNavLink from '../HomeNavLink'
import News from '../News'
import Message from '../Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <HomeNavLink to="/home/news">News</HomeNavLink>
            </li>
            <li>
              <HomeNavLink to="/home/message">message</HomeNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
