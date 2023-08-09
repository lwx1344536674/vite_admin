import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'small/admin/goods/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'small/admin/goods/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'small/admin/goods/del',
    method: 'post',
    data: ids
  })
}
export function upOrDown(id, status) {
  return request({
    url: 'small/admin/goods/upOrDown',
    method: 'post',
    data: { id: id, status: status }
  })
}
export default { add, edit, del, upOrDown }
