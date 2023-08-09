import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/phone/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/phone/update',
    method: 'post',
    data
  })
}
export function checkPhone(phone) {
  return request({
    url: 'sysAdmin/api/phone/checkPhone?phone=' + phone,
    method: 'get'
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/phone/del',
    method: 'post',
    data: ids
  })
}

export default { add, edit, del, checkPhone }
