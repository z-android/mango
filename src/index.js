import React from 'react'
import dva from 'dva'
import './App.css'
import 'antd/dist/antd.css'
import AppModel from './AppModel'
import { RouterConfig } from './config/RouterConfig'

/**
 * 1.初始化 创建应用
 * 支持多实例
 * 支持配置所有的hooks，
 * opts{
 *   history, 路由用的history，默认hasHistory
 *   initialState,  应用初始化数据，优先级高于model中的state
 * }
 */
const app = dva({
  onError(error) {
	console.log('应用层统一错误处理')
  },
})

//2.添加插件
app.use({})

//3.绑定数据模型Model
app.model(AppModel)

//4.添加路由,绑定视图
app.router(RouterConfig)

//5.启动应用
app.start('#root')

const dispatch = app._store.dispatch

export { dispatch }





