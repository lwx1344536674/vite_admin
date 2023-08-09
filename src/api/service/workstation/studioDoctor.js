import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/addStudioDoctor',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/updateStudioDoctor',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/removeStudioDoctor',
    method: 'post',
    data
  })
}

export default { add, edit, del }
