/**
 * 路由表配置管理
 */
import React from 'react'
import { Router, Route, Switch } from 'dva/router'

// user 模块
import { ModuleRouter as UserRouter } from '../modules/user'
import IndexPage from '../layouts/IndexPage'
import ErrorPage from '../layouts/ErrorPage'
import { RouterUtils } from '../mango-web'
import HomePage from '../layouts/HomePage'

// import IndexPage from './IndexPage'

let appHistory = null
const RouterConfig = ({history, app}) => {

  RouterUtils.history = history

  //监听路由变化
  listenRouter(history)

  return (

	<Router history={history}>
	  <Switch>

		<Route exact path="/" component={IndexPage}/>
		<Route exact path="/HomePage" component={HomePage}/>

		{/*用户模块*/}
		<Route path="/user" render={(props) => (<UserRouter {...props} app={app}/>)}/>

		{/*/!*Demo2模块*!/*/}
		{/*<Route path="/demo2" render={(props) => (<Demo2Router {...props} app={app}/>)}/>*/}

		{/*/!*用户管理模块*!/*/}
		{/*<Route path="/user" render={(props) => (<UserRouter {...props} app={app}/>)}/>*/}

		{/*/!*用户管理模块*!/*/}
		{/*<Route path="/life" render={(props) => (<LifeRouter {...props} app={app}/>)}/>*/}

		{/*/!*404界面*!/*/}
		{/*<Route component={() => {*/}
		{/*return (<h1>404</h1>)*/}
		{/*}}/>*/}

		{/*Error界面*/}
		<Route path="/ErrorPage" component={ErrorPage}/>

	  </Switch>
	</Router>
  )
}

function listenRouter(history) {
  history.listen((e) => {
	console.log('路由变化监听' + JSON.stringify(e) + '===' + JSON.stringify(history))
	//进行页面打点，路由得有文字关联
  })
}

export { RouterConfig, appHistory as history }

