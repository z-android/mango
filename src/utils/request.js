import fetch from 'dva/fetch'
import { RouterUtils } from '../mango-web'
import { notification,message } from 'antd'

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options) {
  //发送请求获取响应
  const response = await fetch(url, options)
  //响应统一处理
  if (response.status == 200) {
	//请求成功判断
	const data = await response.json()
	if (data.code === 0) {
	  //请求数据成功
	  console.log('请求成功：' + JSON.stringify(data))
	  return data
	} else {
	  //请求数据失败
	  // notification.error({message: '响应失败', description: data.ext.msg})
	  message.error(data.ext.msg)
	}
  } else {
	//请求失败统一处理——异常界面跳转,响应失败的统一处理跳转到界面
	RouterUtils.push('ErrorPage', {type: response.status})
  }
}

async function requestPost(url, req, optionConfig) {
  let options = {
	method: 'POST',
	body: {
	  ...req,
	  ...optionConfig
	}
  }
  request(url, options)
}

async function requestGet(url, req, optionConfig) {
  let options = {
	method: 'GET',
	body: {
	  ...req,
	  ...optionConfig
	}
  }
  request(url, options)
}

export { request, requestGet, requestPost }
