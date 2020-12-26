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

  pushShow = (id,title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    // this.props.history.push('/home/message/detail',{id,title})

  }

  replaceShow = (id,title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    // this.props.history.replace('/home/message/detail',{id,title})
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

                  {/* 传递search参数 */}
                  {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                  {/* <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,titile:msgObj.title}}}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                  <button onClick={() => this.pushShow(msgObj.id,msgObj.title)}>push查看</button>&nbsp;
                  <button onClick={() => this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
          {<Route path="/home/message/detail/:id/:title" component={Detail} />}
          {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    )
  }
}
