import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/appFile/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/appFile/modifyAppFile',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/appFile/deleteAppFile',
    method: 'post',
    data
  })
}

export default { add, edit, del }
