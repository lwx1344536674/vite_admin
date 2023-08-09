import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/adminVideo/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/adminVideo/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/adminVideo/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
