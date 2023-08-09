import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'user/admin/appointmentTime/addAppointmentTime',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'user/admin/appointmentTime/deleteAppointmentTime',
    method: 'post',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'user/admin/appointmentTime/updateAppointmentTime',
    method: 'post',
    data
  })
}

export default { edit, del, add }
