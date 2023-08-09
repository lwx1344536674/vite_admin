import request from '@/utils/request'
export function add(data) {
  return request({
    url: 'doctor/admin/doctor/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'doctor/admin/doctor/update',
    method: 'post',
    data
  })
}

export function setOnduty(id, isOnduty) {
  return request({
    url: 'doctor/admin/doctor/setOnduty',
    method: 'post',
    data: { id: id, isOnduty: isOnduty }
  })
}
export function setOrder(id, order) {
  return request({
    url: 'doctor/admin/doctor/setOrder',
    method: 'post',
    data: { id: id, ordernum: order }
  })
}

export default { add, edit, setOnduty, setOrder }
