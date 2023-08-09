import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctorHelper/add',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctorHelper/update',
    method: 'post',
    data
  })
}

export function del(data) {
  return request({
    url: 'sysAdmin/admin/orgDoctorHelper/remove',
    method: 'post',
    data
  })
}

export default { add, edit, del }
