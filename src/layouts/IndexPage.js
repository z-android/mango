import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import logo from '../assets/images/logo.svg'
import '../App.css'

import { Button } from 'antd'

import { getLifeHomePage, userdata } from '../modules/life/services/LifeService'

@connect()
class IndexPage extends Component {

  componentDidMount() {
	getLifeHomePage({})
  }

  render() {
	const {dispatch} = this.props
	return (
	  <div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo"/>

		  <Button onClick={() => {
			dispatch(routerRedux.push('/error'))
		  }}>
			跳转界面
		  </Button>
		</header>
	  </div>
	)
  }
}

export default IndexPage
