/**
 * Created by mangyan on 2018/11/28.
 */
import { requestGet, requestPost } from '../../../utils/request'

/**
 * 注册
 * @param req
 * @returns {Promise<void>}
 */
export async function registry(req) {
  return requestGet('/api/user/registry', req)
}

export async function testApi(req) {
  return requestGet('/api')
}