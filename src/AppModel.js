/**
 * Created by zhongzihuan on 2018/11/8.
 * 整个应用的Model管理
 * 应用场景
 * （1）应用路由间跳转，model在路由间共享数据
 *
 */
export default {
	namespace: 'app',
	state: {
		name: 'APPModel',
		//当前设备是否为移动端
		isMobile: false,
	},
	reducers: {
		//注释
		pureUpdateScreen(state, action) {
			const {mobile} = action.payload;
			return {
				...state,
				isMobile: mobile
			};
		},
	},
	effects: {},
	subscriptions: {}
};
