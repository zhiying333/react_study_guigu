import React, {Component} from 'react'

export default class Count extends Component {

  increment = () => {
    //获取用户选择数值
    const {value} = this.selectEle
  }

  decrement = () => {
    const {value} = this.selectEle
  }

  incrementIfOdd = () => {
    const {value} = this.selectEle
  }

  /* increAsync = () => {
    const {value} = this.selectEle
    setTimeout(() => {
      store.dispatch(increAction(value*1))
    }, 500);
  } */

  // 使用异步action对象
  /* increAsync = () => {
    const {value} = this.selectEle
    store.dispatch(increAsyncAction(value*1,1000))
  } */

  render () {
    return (
      <div>
        <h1>当前求和：0</h1>
        <select ref={ele => this.selectEle = ele}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button>+</button>&nbsp;
        <button>-</button>&nbsp;
        <button>和为奇数加</button>&nbsp;
        <button>延迟加</button>
      </div>
    )
  }
}