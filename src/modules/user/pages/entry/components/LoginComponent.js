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
import { Alert, Button, Checkbox, Col, Form, Input, Row, Tabs } from 'antd'
import Strings from '../../../Strings'
import { Dimens, MangoUtils, RouterUtils } from '../../../../../mango-web'
import AuthorityUtils from '../../../../../utils/AuthorityUtils'

const {Tab, UserName, Password, Mobile, Captcha, Submit} = Login
const TabPane = Tabs.TabPane

@connect(({user_entry, loading}) => ({user_entry, submitting: loading.effects['user_entry/onLogin']}))
@Form.create()
class LoginComponent extends Component {

  // 构造
  constructor(props) {
	super(props)

  }

  componentDidUpdate() {
	const {loginRsp} = this.props.user_entry
	if (loginRsp) {
	  if (loginRsp.code == 1) {
		//响应成功,跳转到首页,并保存当前的登录状态
		AuthorityUtils.setToken('token')
		RouterUtils.push('/HomePage')
	  } else {
		//响应失败
		message.error('请求异常')
	  }
	}
  }

  render() {
	const {type} = this.props.user_entry
	const {validateFields} = this.props.form

	return (
	  <Form
		style={styles.container}
		onSubmit={(err, values) => {
		  event.preventDefault()
		  validateFields({force: true}, (err, values) => {
			if (!err) {
			  MangoUtils.dispatch(this, 'user_entry', 'onLogin', {req: values})
			}
		  })
		}}>
		<Tabs
		  style={styles.container_tabs}
		  animated={false}
		  defaultActiveKey={type}
		  onChange={(key) => {
			MangoUtils.dispatch(this, 'user_entry', 'pureChangeTab', {type: key})
		  }}
		>
		  {/*用户名密码登录*/}
		  <TabPane key="tab_username" tab={Strings.login_account}>
			{this.renderLoginByUsername()}
		  </TabPane>

		  {/*手机号登录*/}
		  <TabPane key="tab_phone" tab={Strings.login_mobile}>
			{this.renderLoginByPhone()}
		  </TabPane>
		</Tabs>

		{this.renderBottomLogin()}

	  </Form>

	)
  }

  /**
   * 用户名登录
   */
  renderLoginByUsername = () => {
	const {type, notice, count, autoLogin,} = this.props.user_entry
	const {getFieldDecorator, validateFields} = this.props.form
	const {submitting} = this.props

	if (type === 'tab_phone') {
	  return false
	}
	return (
	  <div>
		{
		  notice &&
		  <Alert style={{marginBottom: 24}} message={notice} type="error" showIcon closable/>
		}

		{/*用户名*/}
		<Form.Item>
		  {
			getFieldDecorator('username', {
			  rules: [
				{
				  required: true,
				  message: '用户名是必须输入的'
				}
			  ]
			})(
			  <Input size={'large'} placeholder={'admin'}/>
			)
		  }
		</Form.Item>

		{/*密码*/}
		<Form.Item>
		  {
			getFieldDecorator('password', {
			  rules: [
				{
				  required: true,
				  message: '密码是必须输入的'
				}
			  ]
			})(
			  <Input size={'large'} placeholder={'123456'} type={'password'}/>
			)
		  }
		</Form.Item>


	  </div>
	)
  }

  /**
   * 手机号登录
   */
  renderLoginByPhone = () => {

	const {type, notice, count, autoLogin,} = this.props.user_entry
	const {getFieldDecorator, validateFields} = this.props.form
	const {submitting} = this.props

	if (type === 'tab_username') {
	  return false
	}

	return (
	  <div>
		{/*手机号*/}
		<Form.Item>
		  {getFieldDecorator('mobile', {
			rules: [
			  {
				required: true,
				message: Strings.phone_require,
			  },
			  {
				pattern: /^\d{11}$/,
				message: Strings.phone_wrong,
			  },
			],
		  })(
			<Input
			  size="large"
			  placeholder={Strings.phone_placeholder}
			/>
		  )}
		</Form.Item>

		{/*验证码*/}
		<Form.Item>
		  <Row gutter={8}>
			<Col span={16}>
			  {getFieldDecorator('captcha', {
				rules: [
				  {
					required: true,
					message: Strings.verification_code_require,
				  },
				],
			  })(
				<Input
				  size="large"
				  placeholder={Strings.verification_code_placeholder}
				/>
			  )}
			</Col>
			<Col span={8}>
			  <Button
				size="large"
				disabled={count}
				onClick={() => {
				  MangoUtils.dispatch(this, 'user_entry', 'onGetCaptcha',)
				}}
			  >
				{count && count > 0
				  ? `${count} s`
				  : Strings.get_verification_code}
			  </Button>
			</Col>
		  </Row>
		</Form.Item>
	  </div>
	)
  }

  /**
   * 登录底部
   */
  renderBottomLogin = () => {
	const {type, notice, count, autoLogin} = this.props.user_entry
	const {getFieldDecorator, validateFields} = this.props.form
	const {submitting} = this.props
	return (
	  <div>
		<div style={styles.flex_line}>
		  <Checkbox checked={autoLogin} onChange={(e) => {
			MangoUtils.dispatch(this, 'user_entry/changeAutoLogin', e.target.checked)
		  }}>
			{Strings.keep_login}
		  </Checkbox>
		  <a style={{float: 'right'}} href="">{Strings.forget_pwd}</a>
		</div>

		<Form.Item>
		  <Button
			size="large"
			loading={submitting}
			type="primary"
			htmlType="submit"
			style={{marginTop: Dimens.d20}}
			block
		  >
			{Strings.login}
		  </Button>

		</Form.Item>

		<div style={styles.flex_line}>
		  {Strings.other_login}
		  <span className="icon icon-alipay"/>
		  <span className="icon icon-taobao"/>
		  <span className="icon icon-weibo"/>
		  <a style={{float: 'right'}} onClick={() => {
			MangoUtils.dispatch(this, 'user_entry', 'pureChangeFragment', {showFragmentId: 2})
		  }}>{Strings.register}</a>
		</div>
	  </div>
	)
  }
}

const styles = {
  container: {
	padding: Dimens.d8,
	width: '36%',
  },
  container_tabs: {
	borderBottom: 0,
	marginBottom: Dimens.d14,
  },
  flex_line: {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
  }
}

export default LoginComponent
