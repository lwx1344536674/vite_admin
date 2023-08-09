import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/adminVideo/addVideoType',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/adminVideo/updateVideoType',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/adminVideo/videoTypeRemove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
