import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/area/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/area/update',
    method: 'post',
    data
  })
}
export default { add, edit }
