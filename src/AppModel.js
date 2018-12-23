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
		//不同设备屏幕下的菜单变化
		collapsed: false,
	},
	reducers: {

		//更新当前设备屏幕类型
		pureUpdateScreen(state, action) {
			const {mobile} = action.payload;
			return {
				...state,
				isMobile: mobile
			};
		},

		//更新设备屏幕下的布局
		pureChangeLayoutCollapsed(state, action) {
			const {collapsed} = action.payload;
			return {
				...state,
				collapsed: collapsed
			};
		},

		//改变侧边栏状态
		pureChangeSliderCollapsed(state, action) {
			return {
				...state,
				collapsed: !state.collapsed
			};
		},

	},
	effects: {},
	subscriptions: {}
};
