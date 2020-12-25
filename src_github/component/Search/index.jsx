import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    const {inputEle:{value}} = this
    const {updateAppState} = this.props
    updateAppState({isFirst: false, isLoading: true})
    // console.log(value)
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`)
    .then(
      response => {
        //查询数据保存到状态
        const {saveUsers} = this.props
        updateAppState({isLoading: false,users:response.data.items})
      },
      error => updateAppState({isLoading: false, err: error.message})
    )
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
