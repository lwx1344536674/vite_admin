import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'patient/admin/membershipOrder/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'patient/admin/membershipOrder/modify',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'patient/admin/membershipOrder/delete',
    method: 'post',
    data
  })
}

export function close(data) {
  return request({
    url: 'patient/admin/membershipOrder/close',
    method: 'post',
    data
  })
}

export function launch(data) {
  return request({
    url: 'patient/admin/membershipOrder/launch',
    method: 'post',
    data
  })
}

export function getSumPrice(data) {
  return request({
    url: 'patient/admin/membershipOrder/getSumPrice',
    method: 'post',
    data
  })
}

export default { add, edit, del, close, launch, getSumPrice }
