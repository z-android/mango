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

  registerModel: (app, model) => {
    if (!cached[model.namespace]) {
      app.model(model)
      cached[model.namespace] = 1
    }
  },

  /**
   * 路由配置项
   */
  configRoute: (props, page, model, path) => {
    const {match, app} = props
    return (
      <Route
        exact
        path={`${match.path + '/' + path}`}
        component={page}
        registerModel={ModelUtils.registerModel(app, model)}/>
    )
  }
}

export default ModelUtils
