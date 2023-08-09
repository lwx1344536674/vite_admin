import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctor/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
