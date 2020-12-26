// 专门用于创建Count组件redux的action对象
import {INCREMENT,DECREMENT} from './constant'

export const increAction = (data) => ({type:INCREMENT,data})
export const decreAction = (data) => ({type:DECREMENT,data})
export const increAsyncAction = (data,time) => {
  //异步action动作对象返回一个函数
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increAction(data))
    },time)
  }
}