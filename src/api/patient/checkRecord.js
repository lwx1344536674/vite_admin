import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/patientCheckRecord/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/patientCheckRecord/modify',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/patientCheckRecord/delete',
    method: 'post',
    data: ids
  })
}

export default { add, edit, del }
