/**
 * Created by zhongzihuan on 2018/11/28.
 */
import { MangoUtils } from '../../../../mango-web'
import Strings from '../../Strings'
import { registry } from '../../services/UserService'

export default {
  namespace: 'user_entry',
  state: {
	notice: '',
	type: 'tab2',
	autoLogin: true,
	showFragmentId: 2,
	//注册
	confirmDirty: false,
	visible: false,
	count: 0,
	help: '',
	prefix: '86',
  },
  /**
   * 以key/value格式定义reducer，处理同步操作，唯一可以修改state的地方，由action触发
   */
  reducers: {

	//保留注释
	pureChangeTab(state, action) {
	  const {} = action.payload
	  return {
		...state,

	  }
	},

	//切换tab   注册时候切换、登录页面切换
	onTabChange(state, action) {
	  const {type} = action.payload
	  return {
		...state,
		type: type
	  }
	},

	pureTabChange(state, action) {
	  const {} = action.payload
	  return {
		...state,

	  }
	},

	//自动登录
	changeAutoLogin(state, action) {
	  return {
		...state,
		autoLogin: action.payload
	  }
	},

	//提交登录结果响应
	pureLoginRsp(state, action) {
	  const {} = action.payload
	  return {
		...state,
		notice: Strings.error_username_pwd,
	  }
	},

	//切换登录、注册
	pureChangeFragment(state, action) {
	  const {showFragmentId, account} = action.payload
	  return {
		...state,
		showFragmentId: showFragmentId,
		account: account
	  }
	},

	//启动倒计时
	pureGetCaptcha(state, action) {
	  const {count} = action.payload
	  return {
		...state,
		count: count
	  }
	},

	//更换手机号区号
	pureChangePrefix(state, action) {
	  const {value} = action.payload
	  return {
		...state,
		prefix: value
	  }
	},

	//注册-校验密码
	pureCheckPassword(state, action) {
	  const {form, value, callback} = action.payload
	  let {visible, confirmDirty, help} = state
	  if (!value) {
		help = Strings.pwd_required
		visible = !!value
		callback('error')
	  } else {
		help = ''
		if (!visible) {
		  visible = !!value
		}
		if (value.length < 6) {
		  callback('error')
		} else {
		  if (value && confirmDirty) {
			form.validateFields(['confirm'], {force: true})
		  }
		  callback()
		}
	  }
	  console.log('注册-校验密码' + JSON.stringify(action.payload) + '===' + help + '===' + visible)
	  return {
		...state,
		help: help,
		visible: visible,
	  }
	},

	//处理注册响应
	pureHandleRegistry(state, action) {
	  console.log('处理注册响应' + JSON.stringify(action.payload))
	  const {registryRsp} = action.payload
	  return {
		...state,
		registryRsp: registryRsp
	  }
	},
  },

  effects: {
	//提交登录
	* onLoginSubmit({payload}, {call, put, select}) {
	  let values = payload.values
	  let err = payload.err
	  const type = yield select(state => state.user_entry.type)
	  console.log('提交获取的数据' + JSON.stringify(payload) + '===' + JSON.stringify(type))
	  if (type === 'tab1') {
		if (!err && (values.username !== 'admin' || values.password !== '888888')) {

		  yield call(MangoUtils.delay(500))
		  yield put({
			type: 'pureLoginRsp',
		  })

		}
	  }
	},

	//提交注册
	* onRegistrySubmit({payload}, {call, put, select}) {
	  yield call(MangoUtils.delay(3000))
	  //组装信息，发送接口请求
	  let values = payload.values
	  let req = values
	  const rsp = yield call(registry, req)
	  console.log('注册响应' + JSON.stringify(rsp))
	  //处理响应
	  yield put({
		type: 'pureHandleRegistry',
		payload: {registryRsp: rsp}
	  })
	},

	//获取验证码
	* onGetCaptcha({payload}, {call, put, select}) {
	  let count = 5
	  // this.setState({count})
	  yield put({
		type: 'pureGetCaptcha',
		payload: {count}
	  })
	  count = yield select(state => state.user_entry.count)
	  while (true) {
		yield call(MangoUtils.delay(1000))
		count -= 1
		yield put({
		  type: 'pureGetCaptcha',
		  payload: {count}
		})
		if (count === 0) {
		  break
		}
	  }
	},

  },
  subscriptions: {}
}
