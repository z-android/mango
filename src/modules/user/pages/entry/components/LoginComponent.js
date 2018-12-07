/**
 * Created by zhongzihuan on 2018/11/28.
 * 用户登录页   容器组件
 * （1）主内容容器
 * （2）账户密码登录
 * （3）手机号登录
 * （4）联名登录
 */
import React, { Component } from 'react'
import { connect } from 'dva'

import Login from 'ant-design-pro/lib/Login'
import { Alert, Checkbox } from 'antd'
import Strings from '../../../Strings'
import { ModelUtils } from '../../../../../mango-web'

const {Tab, UserName, Password, Mobile, Captcha, Submit} = Login

@connect(({user_entry}) => ({user_entry}))
class LoginComponent extends Component {

  // 构造
  constructor(props) {
	super(props)
  }

  render() {
	const {type, notice, autoLogin} = this.props.user_entry
	return (
	  <Login
		defaultActiveKey={type}
		onTabChange={(key) => {
		  ModelUtils.dispatch(this, 'user_entry/onTabChange', key)
		}}
		onSubmit={(err, values) => {
		  ModelUtils.dispatch(this, 'user_entry/onSubmit', {err: err, values: values})
		}}
	  >
		<Tab key="tab1" tab={Strings.login_account}>
		  {
			notice &&
			<Alert style={{marginBottom: 24}} message={notice} type="error" showIcon closable/>
		  }
		  <UserName name="username"/>
		  <Password name="password"/>
		</Tab>
		<Tab key="tab2" tab={Strings.login_mobile}>
		  <Mobile name="mobile"/>
		  <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha"/>
		</Tab>
		<div>
		  <Checkbox checked={autoLogin} onChange={(e) => {
			ModelUtils.dispatch(this, 'user_entry/changeAutoLogin', e.target.checked)
		  }}>
			{Strings.keep_login}
		  </Checkbox>
		  <a style={{float: 'right'}} href="">{Strings.forget_pwd}</a>
		</div>
		<Submit>{Strings.login}</Submit>
		<div>
		  {Strings.other_login}
		  <span className="icon icon-alipay"/>
		  <span className="icon icon-taobao"/>
		  <span className="icon icon-weibo"/>
		  <a style={{float: 'right'}} onClick={() => {
			ModelUtils.dispatch(this, 'user_entry/changeFragment', 2)
		  }}>{Strings.register}</a>
		</div>
	  </Login>
	)
  }
}

export default LoginComponent
