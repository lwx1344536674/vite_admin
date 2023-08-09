import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/ihealthStatus/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/ihealthStatus/updateById',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/admin/ihealthStatus/remove',
    method: 'post',
    data: ids
  })
}
export function list(data) {
  return request({
    url: 'sysAdmin/admin/ihealthStatus/list',
    method: 'get',
    params: data
  })
}
export default { add, del, edit, list }
