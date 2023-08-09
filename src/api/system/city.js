import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/city/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/city/update',
    method: 'post',
    data
  })
}

export default { add, edit }
