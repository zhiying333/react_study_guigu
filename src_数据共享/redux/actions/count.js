//创建count组件的action动作对象
import {INCREMENT,DECREMENT} from '../constants'

export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})