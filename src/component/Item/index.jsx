import React,{Component} from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouse: false}

  //鼠标移入，移出回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  //点击任务项根据id改变当前任务的状态
  change = (id) => {
    return (event) => {
      const {updateTodo} = this.props
      updateTodo(id,event.target.checked)
    }
  }

  deleteTask = (id) => {
    // console.log(id);
    const {deleteTodo} = this.props
    if (window.confirm('确定删除此任务吗')) {
      deleteTodo(id)
    }
  }

  render () {
    const {id,task,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : ''}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.change(id)}/>
          <span>{task}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}} onClick={() => this.deleteTask(id)}>删除</button>
      </li>
    )
  }
}