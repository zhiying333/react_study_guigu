import React,{Component} from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }


  add = (event) => {
    const {keyCode,target} = event
    const {addTodo} = this.props
    if (keyCode !== 13) return
    let value = target.value
    if (value.trim() === '') {
      alert('请不要输入任务')
      return
    }
    const newTask = {
      id:nanoid(),
      task: value,
      done: false
    }
    // console.log(newTask);
    //将新任务维护到状态
    addTodo(newTask)
    target.value = ''
  }

  render () {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.add} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}