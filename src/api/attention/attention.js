import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/adminAttention/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/adminAttention/modify',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/adminAttention/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
