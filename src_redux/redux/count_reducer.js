/* 
1.初始化Count组件的状态，加工状态，返回处理后的新状态
2.本质是一个函数,接收两个参数，之前的状态（preState）,动作对象(action)
*/

import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function countReducer (preState=initState,action) {
  const {type,data} = action
  switch (type) {
    case INCREMENT:
      // console.log('@')
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState
  }
}