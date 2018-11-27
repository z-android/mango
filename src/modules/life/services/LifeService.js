/**
 * Created by zhongzihuan on 2018/11/27.
 * 模块接口信息请求
 */
import { requestPost } from '../../../utils/request'

//获取生活首页信息
export async function getLifeHomePage(req) {
  return requestPost('/api/life/getLifeHomePage', req)
}
