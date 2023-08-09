import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'user/admin/checkPoint/create',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'user/admin/checkPoint/delete',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'user/admin/checkPoint/update',
    method: 'post',
    data
  })
}

export default { edit, del, add }
