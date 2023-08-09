import request from '@/utils/request'

export function add(data) {
  return request({ url: 'user/admin/appointmentTime/saveOrUpdate', method: 'post', data })
}

export function edit(data) {
  return request({
    url: 'user/admin/appointmentTime/saveOrUpdate',
    method: 'post',
    data })
}

export function del(data) {
  return request({ url: 'user/admin/appointmentTime/delete', method: 'post', data })
}

export default { edit, add, del }
