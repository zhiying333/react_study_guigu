import React,{Component} from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked)
  }

  clearAllDone = () => {
    this.props.clearDone()
  }

  render () {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todoObj) => pre + (todoObj.done ? 1 : 0),0)
    // console.log(doneCount)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0? true : false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}