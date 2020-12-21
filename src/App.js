import React,{Component} from 'react'

import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {id:'001', task: 'React', done: true},
      {id:'002', task: 'Vue', done: false},
      {id:'003', task: 'JS', done: true}
    ]
  }

  addTodo = (newTodo) => {
    // console.log(newTodo);
    //newTodo是接收到的Header组件新添加的任务
    const {todos} = this.state
    this.setState({
      todos: [newTodo,...todos]
    })
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return {...todoObj,done}
      }
      else {
        return todoObj
      }
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  checkAll = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })
    this.setState({
      todos: newTodos
    })
  }

  //清除已完成
  clearDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAll={this.checkAll} clearDone={this.clearDone}/>
        </div>
      </div>
    )
  }
}