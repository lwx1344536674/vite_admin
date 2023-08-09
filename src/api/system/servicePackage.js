import request from '@/utils/request'
export function add(data) {
  return request({
    url: 'sysAdmin/api/servicePackage/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/servicePackage/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/api/servicePackage/delete',
    method: 'post',
    data
  })
}
export default { add, edit, del }
