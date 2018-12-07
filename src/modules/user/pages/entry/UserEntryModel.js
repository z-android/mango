/**
 * Created by zhongzihuan on 2018/11/28.
 */
import { ModelUtils } from '../../../../mango-web'
import Strings from '../../Strings'

export default {
  namespace: 'user_entry',
  state: {
	notice: '',
	type: 'tab2',
	autoLogin: true,
	showFragmentId: 1,
  },
  /**
   * 以key/value格式定义reducer，处理同步操作，唯一可以修改state的地方，由action触发
   */
  reducers: {
	//切换tab
	onTabChange(state, action) {
	  return {
		...state,
		type: action.payload
	  }
	},

	//自动登录
	changeAutoLogin(state, action) {
	  return {
		...state,
		autoLogin: action.payload
	  }
	},

	//提交结果响应
	onSubmitRsp(state, action) {
	  return {
		...state,
		notice: Strings.error_username_pwd,
	  }
	},

	//切换登录、注册
	changeFragment(state, action) {
	  return {
		...state,
		showFragmentId: action.payload
	  }
	}

  },
  effects: {
	* onSubmit({payload}, {call, put, select}) {
	  let values = payload.values
	  let err = payload.err
	  const type = yield select(state => state.user_entry.type)
	  console.log('提交获取的数据' + JSON.stringify(payload) + '===' + JSON.stringify(type))
	  if (type === 'tab1') {
		if (!err && (values.username !== 'admin' || values.password !== '888888')) {

		  yield call(ModelUtils.delay(500))
		  yield put({
			type: 'onSubmitRsp',
		  })

		}
	  }
	},
  },
  subscriptions: {}
}
