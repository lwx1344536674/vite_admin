import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/membership/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/membership/updateById',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/admin/membership/remove',
    method: 'post',
    data: ids
  })
}
export default { add, del, edit }
