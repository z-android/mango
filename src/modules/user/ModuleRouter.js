/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用
 */
import React from 'react'
import { Route } from 'dva/router'
import { ModelUtils } from '../../mango-web'

import UserEntryPage from './pages/entry/UserEntryPage'
import UserEntryModel from './pages/entry/UserEntryModel'

const ModuleRouter = (props) => {
  // console.log("模块路由栈："+JSON.stringify(props))
  const {match, app} = props
  return (
	<div>
	  <Route
		exact
		path={`${match.path + '/user-entry'}`}
		component={UserEntryPage}
		registerModel={ModelUtils.registerModel(app, UserEntryModel)}/>

	</div>
  )
}

const RouterUser = {
  login: '/user/user-entry',
}

export { RouterUser, ModuleRouter }





