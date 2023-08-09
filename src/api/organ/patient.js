import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/orgPatient/addPatient',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/orgPatient/editPatient',
    method: 'post',
    data
  })
}

export default { add, edit }
