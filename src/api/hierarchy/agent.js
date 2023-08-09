import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/agent/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/agent/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/agent/delete',
    method: 'post',
    data: ids
  })
}

export default { add, edit, del }
