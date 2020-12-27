// redux的reducer初始化和加工状态模块
import {INCREMENT,DECREMENT} from './constant'

const initCount = 0
export default function countReducer (preState=initCount,action) {
  const {type,data} = action
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState
  } 
}