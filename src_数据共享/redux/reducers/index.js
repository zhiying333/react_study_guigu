//汇总多个reducer

import {combineReducers} from 'redux'
import countReducer from './count'
import personReducer from './person'

export default combineReducers({
  count:countReducer,
  person:personReducer
})