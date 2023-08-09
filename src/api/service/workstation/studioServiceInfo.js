import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/addStudioServiceInfo',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/updateStudioServiceInfo',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/removeStudioServiceInfo',
    method: 'post',
    data
  })
}

export default { add, edit, del }
