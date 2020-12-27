//redux用于创建action动作对象的模块
import {INCREMENT,DECREMENT} from './constant'

export const increAction = data => ({type:INCREMENT,data})
export const decreAction = data => ({type:DECREMENT,data})