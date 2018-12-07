import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import logo from '../assets/images/logo.svg'

import { Button } from 'antd'

import { getLifeHomePage, userdata } from '../modules/life/services/LifeService'
import AuthorityUtils from '../utils/AuthorityUtils'
import { RouterUtils } from '../mango-web'
import { RouterUser } from '../modules/user'

@connect()
class IndexPage extends Component {

  componentDidMount() {
	//权限验证
	if (!AuthorityUtils.getToken()) {
	  RouterUtils.push(RouterUser.login)
	} else {

	}
  }

  render() {
	const {dispatch} = this.props
	return false
	// return (
	//   <div className="App">
	// 	<header className="App-header">
	// 	  <img src={logo} className="App-logo" alt="logo"/>
	//
	// 	  <Button onClick={() => {
	// 		dispatch(routerRedux.push('/error'))
	// 	  }}>
	// 		跳转界面
	// 	  </Button>
	// 	</header>
	//   </div>
	// )
  }
}

export default IndexPage
