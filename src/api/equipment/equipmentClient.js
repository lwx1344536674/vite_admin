import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/equipmentClient/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/equipmentClient/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/equipmentClient/delete',
    method: 'post',
    data: ids
  })
}

export default { add, edit, del }
