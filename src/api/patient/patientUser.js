import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/patientUser/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/patientUser/modify',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'sysAdmin/api/patientUser/delete',
    method: 'post',
    data: ids
  })
}

export function giftList(data) {
  return request({
    url: 'sysAdmin/api/patientUser/giftList',
    method: 'get',
    params: data
  })
}

export function setPatientMember(data) {
  return request({
    url: 'sysAdmin/api/patientUser/setPatientMember',
    method: 'post',
    data
  })
}

export function getReportInfo(data) {
  return request({
    url: 'sysAdmin/api/patientUser/getReportInfo',
    method: 'post',
    data
  })
}

export function modifyReport(data) {
  return request({
    url: 'sysAdmin/api/patientUser/modifyReport',
    method: 'post',
    data
  })
}

export default { add, edit, del, giftList, setPatientMember, getReportInfo, modifyReport }
