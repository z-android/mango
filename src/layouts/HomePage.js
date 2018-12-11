/**
 * Created by mangyan on 2018/12/10.
 * 首页
 */
import React, { Component } from 'react'
import { connect } from 'dva'

@connect(({namespace}) => ({namespace}))
class HomePage extends Component {

  render() {
	return (
	  <div>
		我是首页
	  </div>
	)
  }
}

const styles = {}

export default HomePage
