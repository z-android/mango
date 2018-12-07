/**
 * Created by zhongzihuan on 2018/11/16.
 */
import React from 'react'

import { Route } from 'dva/router'

const cached = {}

const ModelUtils = {

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
		registerModel={ModelUtils.registerModel(app, model)}/>
	)
  },

  /**
   * 消息触发
   */
  dispatch(cnx, type, payload) {
	console.log('zzh' + cnx)
	cnx.props.dispatch({
	  type: type,
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

export default ModelUtils
