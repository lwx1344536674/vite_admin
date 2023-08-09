import request from '@/utils/request'

export function getDeviceDataList(data) {
  return request({
    url: 'sysAdmin/api/poctReport/getDeviceDataList',
    method: 'get',
    data
  })
}
export function editDeviceData(data) {
  return request({
    url: 'sysAdmin/api/poctReport/editDeviceData',
    method: 'post',
    data
  })
}
export function pushReport(patientId, reportId) {
  return request({
    url: 'sysAdmin/api/poctReport/pushReport?patientId=' + patientId + '&reportId=' + reportId,
    method: 'post'
  })
}
export function saveReportIntervention(data) {
  return request({
    url: 'sysAdmin/api/peportIntervention/saveReportIntervention',
    method: 'post',
    data
  })
}
export function isHidenTestItems(id) {
  return request({
    url: 'sysAdmin/api/poctReport/editTestItems?id=' + id,
    method: 'get'
  })
}
export function getInterveneList(goodsName) {
  return request({
    url: 'sysAdmin/api/peportIntervention/getInterveneList',
    method: 'get',
    params: {
      goodsName
    }
  })
}
export function createReportIntervention(data) {
  return request({
    url: 'sysAdmin/api/peportIntervention/createReportIntervention',
    method: 'post',
    data
  })
}
export function deleteReportIntervention(data) {
  return request({
    url: 'sysAdmin/api/peportIntervention/deleteReportIntervention',
    method: 'post',
    data
  })
}
export default { getDeviceDataList, editDeviceData, pushReport, saveReportIntervention, isHidenTestItems, getInterveneList, createReportIntervention, deleteReportIntervention }
