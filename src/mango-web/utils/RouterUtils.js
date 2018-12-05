/**
 * Created by zhongzihuan on 2018/11/15.
 * 路由工具管理者
 * （路由库选择）
 *  react-router、react-navigation
 *
 * 所有的路由管理者都是一个对象，拥有着通用的属性和方法来处理前端涉及到的路由问题
 * 基本保持与history相同的API，处理通用性前端路由管理
 *
 *  监听:采用观察者模式，location改变时，history会发出通知
 */

const RouterUtils = {

  history: null,

  /**
   * 路由跳转到指定界面
   * 不传参——>直接加上路由名称
   * 传递参数
   */
  push(path, params) {
	this.history.push(path + '?' + this.urlEncode(params))
  },

  /**
   *
   */
  replace(path) {
	this.history.replace(path)
  },

  /**
   * 返回上一页
   * @param props
   */
  goBack() {
	this.history.goBack()
  },

  /**
   * 向前一页
   * @param props
   */
  goForward() {
	this.history.goForward()
  },

  listen(router, callBack) {
	router.listen(callBack)
  },

  /**
   * 获取传递参数
   */
  getParams() {
	let ret = {}
	let history = this.history
	if (history.location.search.includes('?')) {
	  let params = history.location.search.split('?')[1].split('&')
	  for (let i = 0; i < params.length; i++) {
		let paramKey = params[i].split('=')[0]
		let paramVal = params[i].split('=')[1]
		ret[paramKey] = paramVal
	  }
	}
	return ret
  },

  /**
   * URL解析
   * @param param
   * @param key
   * @param encod
   * @returns {string}
   */
  urlEncode(param, key, encode) {
	if (param == null) return ''
	let paramStr = ''
	let t = typeof (param)
	if (t == 'string' || t == 'number' || t == 'boolean') {
	  paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
	} else {
	  for (let i in param) {
		let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
		paramStr += this.urlEncode(param[i], k, encode)
	  }
	}
	return paramStr
  }

}

export default RouterUtils
