import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'patient/admin/drug/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'patient/admin/drug/update',
    method: 'post',
    data
  })
}

export default { add, edit, }
