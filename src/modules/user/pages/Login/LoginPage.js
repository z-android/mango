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

@connect(({user_login_page}) => ({user_login_page}))
class LoginPage extends Component {

  // 构造
  constructor(props) {
    super(props)
    // 初始状态
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>登录界面</h1>
      </div>
    )
  }

}

export default LoginPage
