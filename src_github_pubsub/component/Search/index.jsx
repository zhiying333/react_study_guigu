import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    const {inputEle:{value}} = this
    PubSub.publish('search',{isFirst: false, isLoading: true})
    axios.get(`/api1/search/users2?q=${value}`)
    .then(
      response => {
        PubSub.publish('search',{isLoading: false, users: response.data.items})
      },
      error => {
        PubSub.publish('search',{isLoading: false, err: error.message})
      }
    )
    this.inputEle.value = ''
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索用户</h3>
        <div>
          <input ref={inputNode => this.inputEle = inputNode} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}


