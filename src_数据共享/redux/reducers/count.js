//count组件的reducer模块，初始化和加工count组件的状态

import {INCREMENT,DECREMENT} from '../constants'

//初始状态
const initState = 0
export default function countReducer (preState=initState, action) {
  const {type,data} = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}