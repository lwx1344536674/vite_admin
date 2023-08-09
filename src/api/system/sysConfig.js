import request from '@/utils/request'

/**
 * 获取系统配置列表
 * @returns {*}
 */
export const getSysConfigList = () => {
  return request({
    url: 'sysAdmin/api/sysConfig/list',
    method: 'get'
  })
}

/**
 * 重新加载系统配置
 * @returns {*}
 */
export const reLoadSysConfig = () => {
  return request({
    url: 'sysAdmin/api/sysConfig/reLoadSysConfig',
    method: 'get'
  })
}
export const get = (id) => {
  return request({
    url: `sysAdmin/api/sysConfig/getSysConfig/${id}`,
    method: 'get'
  })
}

export function edit(data) {
  return request({
    url: `sysAdmin/api/sysConfig/updateSysConfig`,
    method: 'post',
    data
  })
}

export function add(data) {
  return request({
    url: `sysAdmin/api/sysConfig/createSysConfig`,
    method: 'post',
    data
  })
}

export default { add, edit, reLoadSysConfig, get }
