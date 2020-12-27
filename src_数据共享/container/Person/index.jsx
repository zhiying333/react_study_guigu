import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
  addInfo = () => {
    //获取表单输入个人信息
    const name = this.nameEle.value
    const age = this.ageEle.value
    const person = {
      id:nanoid(),
      name,
      age
    }
    //通知redux将新添加信息维护到状态
    this.props.add(person)
    this.nameEle.value = this.ageEle.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" ref={ele => this.nameEle = ele}/>&nbsp;&nbsp;
        <input type="text" ref={ele => this.ageEle = ele}/>&nbsp;&nbsp;
        <button onClick={this.addInfo}>添加</button>
        <ul>
          {
            this.props.persons.map((personObj) => {
              return <li key={personObj.id}>name:{personObj.name}---age:{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({persons:state.person}),
  {
    add:addPerson
  }
)(Person)
