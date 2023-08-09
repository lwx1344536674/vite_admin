import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/saleTask/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/saleTask/update',
    method: 'post',
    data
  })
}
export function del(data) {
  return request({
    url: 'sysAdmin/api/saleTask/delete',
    method: 'post',
    data
  })
}

export default { add, edit, del }
