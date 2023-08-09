import request from '@/utils/request'

export function getListByPage(params) {
  return request({
    url: 'user/admin/deviceData/getListByPage',
    method: 'get',
    params
  })
}

export function queryDataByPage(params) {
  return request({
    url: 'sysAdmin/api/patient/queryDataByPage',
    method: 'get',
    params
  })
}

export function exportDeviceData(params) {
  return request({
    url: 'user/admin/deviceData/exportDeviceData',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: 'sysAdmin/auth/logout',
    method: 'post'
  })
}
