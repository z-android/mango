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

import { Form, Input, Button, Select, Row, Col, Popover, Progress } from 'antd'
import Strings from '../../../Strings'
import { Dimens, ModelUtils } from '../../../../../mango-web'

const FormItem = Form.Item

@connect(({user_entry}) => ({user_entry}))
@Form.create()
class RegisterComponent extends Component {

  // 构造
  constructor(props) {
	super(props)
  }

  render() {
	const {type, notice, autoLogin} = this.props.user_entry
	const {getFieldDecorator} = this.props.form

	return (
	  <div style={styles.container}>
		<h3>
		  {Strings.register}
		</h3>


		{/*邮箱*/}
		<Form onSubmit={() => {

		}}>
		  {/*邮箱*/}
		  <FormItem>
			{getFieldDecorator('mail', {
			  rules: [
				{
				  required: true,
				  message: Strings.email_require,
				},
				{
				  type: 'email',
				  message: Strings.email_wrong_format,
				},
			  ],
			})(
			  <Input size="large" placeholder={Strings.email}/>
			)}
		  </FormItem>

		  {/*密码*/}
		  <FormItem help={help}>
			<Popover
			  getPopupContainer={node => node.parentNode}
			  content={
				<div style={{ padding: '4px 0' }}>
				  {passwordStatusMap[this.getPasswordStatus()]}
				  {this.renderPasswordProgress()}
				  <div style={{ marginTop: 10 }}>
					<FormattedMessage id="validation.password.strength.msg" />
				  </div>
				</div>
			  }
			  overlayStyle={{ width: 240 }}
			  placement="right"
			  visible={visible}
			>
			  {getFieldDecorator('password', {
				rules: [
				  {
					validator: this.checkPassword,
				  },
				],
			  })(
				<Input
				  size="large"
				  type="password"
				  placeholder={formatMessage({ id: 'form.password.placeholder' })}
				/>
			  )}
			</Popover>
		  </FormItem>


		</Form>
	  </div>
	)
  }
}

const styles = {
  container: {
	width: Dimens.d366,
	margin: [0, 'auto']
  }
}

export default RegisterComponent
