//Count的UI组件库
import React, {Component} from 'react'

export default class Count extends Component {

  increment = () => {
    //获取用户选择数值
    const {value} = this.selectEle
    this.props.incre(value*1)
  }

  decrement = () => {
    const {value} = this.selectEle
    this.props.decre(value*1)
  }

  incrementIfOdd = () => {
    const {value} = this.selectEle
    if (this.props.count % 2 === 1) {
      this.props.incre(value*1)
    }
  }

  increAsync = () => {
    const {value} = this.selectEle
    setTimeout(() => {
      this.props.incre(value*1)
    }, 1000);
  }

  // 使用异步action对象
  /* increAsync = () => {
    const {value} = this.selectEle
    store.dispatch(increAsyncAction(value*1,1000))
  } */

  render () {
    return (
      <div>
        <h1>当前求和：{this.props.count}</h1>
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