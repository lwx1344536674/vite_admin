import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/addStudio',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/updateStudio',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/admin/adminStudio/removeStudio',
    method: 'post',
    data
  })
}

export default { add, edit, del }
