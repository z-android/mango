/**
 * Created by zhongzihuan on 2018/12/7.
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'dva'
import LoginComponent from './components/LoginComponent'
import { Dimens } from '../../../../mango-web'
import RegisterComponent from './components/RegisterComponent'
import Themes from '../../../../assets/Theme'
import logo from '../../../../assets/logo.svg'
import RegisterResultComponent from './components/RegisterResultComponent'

@connect(({user_entry}) => ({user_entry}))
class UserEntryPage extends Component {

  // 构造
  constructor(props) {
	super(props)
  }

  render() {
	const {showFragmentId} = this.props.user_entry
	let fragment = false

	switch (showFragmentId) {
	  case 1:
		fragment = <LoginComponent/>
		break
	  case 2:
		fragment = <RegisterComponent/>
		break
	  case 3:
		fragment = <RegisterResultComponent/>
		break
	}

	return (
	  <div style={styles.container}>
		<img style={styles.img_bg} src={'https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg'}/>

		<div style={styles.top}>
		  <div
			style={styles.header}
			onClick={() => {

			}}>
			<img alt="logo" style={styles.img_logo} src={logo}/>
			<span style={styles.tv_title}>Mango Design Pro</span>
		  </div>
		  <div style={styles.tv_desc}>Web实践规范</div>
		</div>

		<div style={{display: 'flex', justifyContent: 'center'}}>
		  {fragment}
		</div>
	  </div>
	)
  }
}

const styles = {
  container: {
	display: 'flex',
	backgroundColor: Themes.bg_color_secondary,
	flexDirection: 'column',
	width: Dimens.fill_width,
	height: Dimens.fill_height,
  },
  img_bg: {
	position: 'absolute',
	left: 0,
	top: Dimens.d110,
	backgroundRepeat: 'no-repeat',
	width: '100%',
  },
  img_logo: {
	height: Dimens.d44,
  },
  top: {
	textAlign: 'center'
  },
  tv_desc: {
	fontSize: Themes.font_size_sm,
	color: Themes.font_color,
	marginBottom: Dimens.d20
  },
  tv_title: {
	fontSize: Themes.font_size_lg,
	color: Themes.font_color_secondary,
	fontWeight: '900',
	marginLeft: Dimens.d15,
	fontFamily: ['Myriad Pro', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif']
  },
  header: {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: Dimens.d66,
	marginBottom: Dimens.d10
  }
}

export default UserEntryPage
