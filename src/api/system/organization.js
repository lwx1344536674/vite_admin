import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/organization/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/organization/upd',
    method: 'post',
    data
  })
}
export function del(data) {
  return request({
    url: 'sysAdmin/api/organization/del',
    method: 'post',
    data
  })
}
export function getMenusTree(id) {
  return request({
    url: 'sysAdmin/api/organization/listByParentId?id=' + id,
    method: 'get'
  })
}
export function getMenuSuperior(ids) {
  return request({
    url: 'sysAdmin/api/organization/listTree?id=' + ids,
    method: 'get'
  })
}
export default { edit, add, del, getMenusTree, getMenuSuperior }
