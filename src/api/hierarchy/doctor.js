import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/doctor/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/doctor/update',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/doctor/delete',
    method: 'post',
    data: ids
  })
}

export function getVillageDoctorCrcRel(data) {
  return request({
    url: 'sysAdmin/api/doctor/getVillageDoctorCrcRel?villageDoctorId=' + data,
    method: 'get'
  })
}

export function saveVillageDoctorCrcRel(data) {
  return request({
    url: 'sysAdmin/api/doctor/saveVillageDoctorCrcRel',
    method: 'post',
    data
  })
}

export function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}

export default { add, edit, del, getUrlKey, getVillageDoctorCrcRel, saveVillageDoctorCrcRel }
