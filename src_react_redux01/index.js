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

//用于react页面实时监视redux状态改变时，调用render从而引起页面更新
/* store.subscribe(() => {
	ReactDOM.render(<App/>,document.getElementById('root'))
}) */