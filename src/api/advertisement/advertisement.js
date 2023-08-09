import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/adminAdvertise/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/adminAdvertise/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/adminAdvertise/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
