/**
 * Created by mangyan on 2018/11/28.
 */
import { currentUser } from './services/UserService';

export default {
  namespace: 'user',
  state: {
    //当前的用户信息
    currentUser: null,
  },
  /**
   * 以key/value格式定义reducer，处理同步操作，唯一可以修改state的地方，由action触发
   */
  reducers: {

    //处理请求当前用户界面
    pureFetchCurrentUser(state, action) {
      const {rsp} = action.payload;
      console.log('当前的用户信息：' + JSON.stringify(rsp));
      return {
        ...state,
        currentUser: rsp
      };
    },

  },

  effects: {
    //获取当前用户信息
    * onFetchCurrentUser({payload}, {call, put, select}) {
      let req = payload.req;
      const response = yield call(currentUser, req);
      yield put({
        type: 'pureFetchCurrentUser',
        payload: {rsp: response}
      });
    }

  },
  subscriptions: {}
};
