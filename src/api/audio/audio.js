import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/adminAudio/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/adminAudio/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/adminAudio/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
