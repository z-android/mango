/**
 * Created by zhongzihuan on 2018/12/13.
 */

//简单工厂模式
class User {

  constructor(opt) {
	this.name = opt.name
	this.viewPage = opt.viewPage
  }

  //静态方法
  static getInstance(role) {
	switch (role) {
	  case 'superAdmin':
		return new User({name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '管理员页', '超级管理员页']})
		break

	  case 'admin':
		return new User({name: '管理员', viewPage: ['首页', '通讯录', '发现页', '管理员页']})
		break

	  case 'user':
		return new User({name: '普通用户', viewPage: ['首页', '通讯录', '发现页']})
		break
	}
  }
}

let superAdmin = User.getInstance('superAdmin')
console.log(superAdmin.viewPage)
let admin = User.getInstance('admin')
let normalUser = User.getInstance('user')
