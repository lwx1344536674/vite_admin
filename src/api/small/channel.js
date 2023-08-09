import request from '@/utils/request'
export function add(data) {
  return request({
    url: 'small/admin/smallChannel/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'small/admin/smallChannel/update',
    method: 'post',
    data
  })
}
export default { add, edit }
