import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/hospital/addHospitalJoinProject',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/hospital/updateHospitalJoinProject',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/hospital/deleteHospitalJoinProject',
    method: 'post',
    data: ids
  })
}

export default { add, edit, del }
