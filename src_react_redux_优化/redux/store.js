import {createStore} from 'redux'
import countReducer from './count_reducer'

//创建store对象
export default createStore(countReducer)