//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//引入App
import App from './App'
import store from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)
