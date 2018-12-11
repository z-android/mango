/**
 * Created by mangyan on 2018/12/9.
 */
import React from 'react'

import { Route } from 'dva/router'

const cached = {}

const MangoUtils = {

  /**
   * 注册model
   * @param app
   * @param model
   */
  registerModel(app, model) {
	if (!cached[model.namespace]) {
	  app.model(model)
	  cached[model.namespace] = 1
	}
  },

  /**
   * 路由配置项
   */
  configRoute(props, page, model, path) {
	const {match, app} = props
	return (
	  <Route
		exact
		path={`${match.path + '/' + path}`}
		component={page}
		registerModel={MangoUtils.registerModel(app, model)}/>
	)
  },

  /**
   * 消息触发
   */
  dispatch(cnx, namespace, type, payload) {
	cnx.props.dispatch({
	  type: namespace + '/' + type,
	  payload: payload
	})
  },

  /**
   * 在model中处理自发延迟
   */
  delay(ms) {
	return () => new Promise((resolve) => {
	  setTimeout(resolve, ms)
	})
  },
}

export default MangoUtils
