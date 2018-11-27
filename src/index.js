import React from 'react'
import './index.css'

import dva from 'dva'
import RouterConfig from './RouterConfig'
import AppModel from './AppModel'

/**
 * 1.初始化 创建应用
 * 支持多实例
 * 支持配置所有的hooks，
 * opts{
 *   history, 路由用的history，默认hasHistory
 *   initialState,  应用初始化数据，优先级高于model中的state
 * }
 */
const app = dva({})

var h = 1

//2.添加插件
app.use({
  onError: () => {
	console.log('应用层统一错误处理')
  },
})

//3.绑定数据模型Model
app.model(AppModel)

//4.添加路由,绑定视图
app.router(RouterConfig)

//5.启动应用
app.start('#root')

//
//
// import ReactDOM from 'react-dom'
// import App from './App'
// import * as serviceWorker from './serviceWorker'
//
// ReactDOM.render(<App/>, document.getElementById('root'))
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()


