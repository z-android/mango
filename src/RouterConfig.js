/**
 * 路由表配置管理
 */
import React from 'react'
import { Router, Route, Switch } from 'dva/router'

// // demo 模块
// import { ModuleRouter as DemoRouter } from './modules/demo'
// //demo2模块
// import { ModuleRouter as Demo2Router } from './modules/demo2'
//
// //用户管理模块
// import { ModuleRouter as UserRouter } from './modules/user'
//
// //晒家模块
// import { ModuleRouter as LifeRouter } from './modules/life'
//
// import IndexPage from './IndexPage'

import App from './App'

const RouterConfig = ({history, app}) => {

  //监听路由变化
  listenRouter(history)

  return (
    <Router history={history}>
      <Switch>

        <Route exact path="/" component={App}/>

        {/*/!*Demo模块*!/*/}
        {/*<Route path="/demo" render={(props) => (<DemoRouter {...props} app={app}/>)}/>*/}

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

        {/*/!*Error界面*!/*/}
        {/*<Route path="/error" component={() => {*/}
          {/*return (<h1>异常页面处理</h1>)*/}
        {/*}}/>*/}

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

export default RouterConfig

