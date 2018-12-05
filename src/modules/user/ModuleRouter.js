/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用
 */
import React from 'react'
import { Route } from 'dva/router'
import { ModelUtils } from '../../mango-web'

import LoginPage from './pages/Login/LoginPage'
import LoginModel from './pages/Login/LoginModel'

const ModuleRouter = (props) => {
  // console.log("模块路由栈："+JSON.stringify(props))
  const {match, app} = props
  return (
	<div>
	  <h2>用户模块</h2>

	  <Route
		exact
		path={`${match.path + '/login'}`}
		component={LoginPage}
		registerModel={ModelUtils.registerModel(app, LoginModel)}/>

	</div>
  )
}

export default ModuleRouter





