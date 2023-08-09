import request from '@/utils/request'

// 获取所有的Role
export function getAll() {
  return request({
    url: 'suim/api/roles/list?page=0&size=100',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: 'suim/api/roles/save',
    method: 'post',
    data
  })
}

export function get(id) {
  return request({
    url: 'suim/api/roles/' + id,
    method: 'get'
  })
}

export function getLevel() {
  return request({
    url: 'suim/api/roles/level',
    method: 'get'
  })
}

export function del(ids) {
  return request({
    url: 'suim/api/roles/del',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'suim/api/roles/update',
    method: 'post',
    data
  })
}

export function editMenu(data) {
  return request({
    url: 'suim/api/roles/updateMenu',
    method: 'post',
    data
  })
}

export function getUserRoleList(userId) {
  return request({
    url: 'suim/api/roles/getUserRoleList?systemProjectId=1&userId=' + userId,
    method: 'get'
  })
}
export function getUserRoles(userId) {
  return request({
    url: 'suim/api/roles/getUserRoles?systemProjectId=1&userId=' + userId,
    method: 'get'
  })
}

export default { add, edit, del, get, editMenu, getLevel, getUserRoles }
