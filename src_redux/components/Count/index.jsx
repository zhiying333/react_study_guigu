import React, {Component} from 'react'
import store from '../../redux/store'
import {increAction,decreAction,increAsyncAction} from '../../redux/count_action'

export default class Count extends Component {

  increment = () => {
    //获取用户选择数值
    const {value} = this.selectEle
    store.dispatch(increAction(value*1))
  }

  decrement = () => {
    const {value} = this.selectEle
    store.dispatch(decreAction(value*1))
  }

  incrementIfOdd = () => {
    const {value} = this.selectEle
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(increAction(value*1))
    } 
  }

  /* increAsync = () => {
    const {value} = this.selectEle
    setTimeout(() => {
      store.dispatch(increAction(value*1))
    }, 500);
  } */

  // 使用异步action对象
  increAsync = () => {
    const {value} = this.selectEle
    store.dispatch(increAsyncAction(value*1,1000))
  }

  render () {
    return (
      <div>
        <h1>当前求和：{store.getState()}</h1>
        <select ref={ele => this.selectEle = ele}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>和为奇数加</button>&nbsp;
        <button onClick={this.increAsync}>延迟加</button>
      </div>
    )
  }
}