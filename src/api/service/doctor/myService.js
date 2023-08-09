import request from '@/utils/request'
export function add(data) {
  return request({
    url: 'doctor/admin/doctorItem/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'doctor/admin/doctorItem/update',
    method: 'post',
    data
  })
}
export function serviceGoods(type, status) {
  return request({
    url: 'doctor/admin/doctorItem/serviceGoods?type=' + type + '&status=' + status,
    method: 'get'
  })
}
export default { add, edit, serviceGoods }
