import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'doctor/admin/doctorOutCall/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'doctor/admin/doctorOutCall/update',
    method: 'post',
    data
  })
}
export default { add, edit}
