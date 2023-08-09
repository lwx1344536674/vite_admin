import request from '@/utils/request'

export function del(data) {
  return request({
    url: 'sysAdmin/api/patient/deleteNotIntoGroupPatient',
    method: 'post',
    data
  })
}
export function getInformedConsentFormDetail(params) {
  return request({
    url: 'sysAdmin/api/patient/getInformedConsentFormDetail',
    method: 'get',
    params
  })
}

export default { del, getInformedConsentFormDetail }
