/**
 * Created by mangoer on 2018/8/14.
 * 路由管理
 * 使用场景：（界面A、B、C、D）
 *
 * _界面跳转
 * 1.A跳转到B RNRouter.navigate(this.props.navigation,'B',{params:''})
 * 2.D跳转到A，但是不关闭其他界面  RNRouter.push(this.props.navigation,'A',{params:''})
 *
 * _界面返回
 * 1.D直接返回到B，并关闭其他界面 RNRouter.navigate(this.props.navigation,'A',{params:''})
 * 2.直接返回到上一页 RNRouter.goBack(this.props.navigation)
 * 3.直接返回到起始界面 RNRouter.popToTop(this.props.navigation)
 *
 *
 * _参数获取：
 *  RNRouter.getParams(this)
 */

const RNRouter = {

	/**
	 * 路由跳转
	 * @param navigation
	 * @param routeName
	 * @param passPros
	 *
	 */
	navigate: (navigation, routeName, passPros) => {
		if (navigation) {
			navigation.navigate(routeName, {
				...passPros
			})
		}
	},

	push: (navigation, routeName, passPros) => {
		if (navigation) {
			navigation.push(routeName, {
				...passPros
			})
		}
	},

	/**
	 * 关闭当前页面并返回上一页
	 * 场景1：返回上一级  RNRouter.goBack()
	 */
	goBack: (navigation) => {
		if (navigation) {
			navigation.goBack()
		}
	},

	/**
	 * 跳到栈顶
	 */
	popToTop: (navigation) => {
		if (navigation) {
			navigation.popToTop()
		}
	},

	/**
	 * 获得传递过来的参数
	 * @returns {*}
	 */
	getParams: (cnx) => {
		const {params} = cnx.props.navigation.state
		if (params) {
			return params
		} else {
			return cnx.props.screenProps
		}
	},

}

export default RNRouter
