import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messages:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'}
    ]
  }

  render() {
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
          <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    )
  }
}
