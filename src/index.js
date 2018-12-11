import React from 'react'
// import dva from 'dva'
import 'antd/dist/antd.css'
import 'ant-design-pro/dist/ant-design-pro.css'

import AppModel from './AppModel'
import { RouterConfig } from './config/RouterConfig'

import { createLoading,mango } from './mango-web'
import { createLogger } from 'redux-logger'

/**
 * 1.初始化 创建应用
 * 支持多实例
 * 支持配置所有的hooks，
 * opts{
 *   history, 路由用的history，默认hasHistory
 *   initialState,  应用初始化数据，优先级高于model中的state
 * }
 */
const app = mango({
  onError(error) {
	console.log('应用层统一错误处理')
  },

  //action被dispatch时触发
  onAction: createLogger(),

  //state改变时触发，用于同步state到localStorage，服务器端等
  onStateChange: (state) => {
	//todo 获取了当前的所有state状态树  统一性：做全局的框架层操作，希望浏览器/app再次打开时，能自动加载出上次数据
	console.log('state改变了' + JSON.stringify(state))
  },

  // //封装reducer执行，比如借助redux-undo实现redo/undo
  // onReducer: reducer => {
  //
  // },

  //封装effect执行
  // onEffect: createLoading(),

})

//2.添加插件
app.use(createLoading())

//3.绑定数据模型Model
app.model(AppModel)

//4.添加路由,绑定视图
app.router(RouterConfig)

//5.启动应用
app.start('#root')

const dispatch = app._store.dispatch

export { dispatch }





