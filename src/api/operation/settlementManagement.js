import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/settlement/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/settlement/update',
    method: 'post',
    data
  })
}
export function del(data) {
  return request({
    url: 'sysAdmin/api/settlement/delete',
    method: 'post',
    data
  })
}

export default { add, edit, del }
