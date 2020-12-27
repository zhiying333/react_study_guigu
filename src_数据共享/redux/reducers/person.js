//Person组件初始化状态，加工状态的reducer模块
import {nanoid} from 'nanoid'
import {ADD_PERSON} from '../constants'

const initState = [{
  id:nanoid(),
  name:'张三',
  age: 16
}]
export default function personReducer (preState=initState, action) {
  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}