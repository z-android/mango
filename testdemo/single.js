/**
 * Created by mangyan on 2018/12/12.
 * 单例模式
 */

/**
 * 简单的单例模式
 * 对象字面量创建对象
 * (1)const let不允许重复声明特性，确保实例不能被重新覆盖
 */
  // const timeTool = {
  //   name: '处理时间工具库',
  //   getIosDate: function () {
  // 	console.log('getIosDate')
  //   },
  //
  //   getUTCdate: function () {
  // 	console.log('getUTCdate')
  //   },
  //
  //   getAndroidDate() {
  // 	console.log('getAndroidDate')
  //   },
  //
  // }
  //
  // timeTool.getAndroidDate()
  // timeTool.getIosDate()
  // timeTool.getUTCdate()

  // const timeTool = (
  // 	function () {
  // 	  let _instance = null
  //
  // 	  function init() {
  // 		console.log('init()')
  // 		//私有变量
  // 		let now = new Date()
  // 		//共有属性和方法
  // 		this.name = '处理时间工具库'
  //
  // 		/**
  // 		 * 获取IOS时间
  // 		 */
  // 		this.getIosdate = function () {
  // 		  console.log('getIosDate')
  // 		}
  //
  // 		/**
  // 		 * 获取android时间
  // 		 */
  // 		this.getAndroidDate = function (name) {
  // 		  console.log("getAndroidDate:"+name)
  // 		  this.getIosdate()
  // 		}
  //
  // 	  }
  //
  // 	  return function () {
  // 		console.log('_instance init()')
  // 		if (!_instance) {
  // 		  _instance = new init()
  // 		}
  // 		return _instance
  // 	  }
  //
  // 	}
  //
  //   )()
  //
  // let instance1 = timeTool().getAndroidDate("哈哈")
  //
  // class SingleApple {
  //
  //   constructor(name, creator, products) {
  // 	//首次使用构造器
  // 	if (!SingleApple.instance) {
  // 	  this.name = name
  // 	  this.creator = creator
  // 	  this.products = products
  // 	  //将this挂载到SingletonApple这个类的instance属性上
  // 	  SingleApple.instance = this
  // 	}
  // 	return SingleApple.instance
  //   }
  //
  // }
  //
  // let appleCompany = new SingleApple()

class SingletonApple {

  constructor(name, creator, products) {
	this.name = name
	this.creator = creator
	this.products = products
  }

  static getInstance(name, creator, products) {
	if (!this.instance) {
	  this.instance = new SingletonApple(name, creator, products)
	}
	return this.instance
  }

  funTest() {
	console.log('funTest')
  }
}

let appleCompany = SingletonApple.getInstance('苹果公司', '乔布斯', ['ipad', 'iphone'])
let copyAppleCompany = SingletonApple.getInstance('苹果公司', '乔布斯', ['ipad', 'iphone'])

appleCompany.funTest()

console.log(appleCompany === copyAppleCompany)







