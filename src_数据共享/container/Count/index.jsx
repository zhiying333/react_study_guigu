import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from '../../redux/actions/count'

class Count extends Component {

  increment = () => {
    const {value} = this.selectEle
    //通知redux进行状态处理
    this.props.increment(value*1)
  }

  decrement = () => {
    const {value} = this.selectEle
    //通知redux进行状态处理
    this.props.decrement(value*1)
  }

  incrementIfOdd = () => {
    const {value} = this.selectEle
    if (this.props.count % 2 !== 0) {
      this.props.increment(value*1)
    }
  }

  incrementAsync = () => {
    const {value} = this.selectEle
    setTimeout(() => {
      this.props.increment(value*1)
    }, 1000);
  }

  render () {
    return (
      <div>
        <h2>当前计算和：{this.props.count}</h2>
        <select ref={ele => this.selectEle = ele}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>和值为奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>延迟加</button>
        <hr/>
        <h3>Person组件的人员信息有：</h3>
        <ul>
          {
            this.props.personInfo.map((personObj) => {
              return <li key={personObj.id}>name:{personObj.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({count: state.count,personInfo:state.person}),
  {
    increment,
    decrement
  }
)(Count)