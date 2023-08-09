import request from '@/utils/request'
// import * as url from 'url'

export function add(data) {
  return request({
    url: 'sysAdmin/api/province/save',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/province/save',
    method: 'post',
    data
  })
}
export function getIhealth(data) {
  return request({
    url: 'sysAdmin/api/reportExt/getIhealth?reportId=' + data.reportId,
    method: 'get',
    data
  })
}
export function addReportExt(data) {
  return request({
    url: 'sysAdmin/api/reportExt/addReportExt',
    method: 'post',
    data
  })
}
export function patientAdditional(data) {
  return request({
    url: 'sysAdmin/api/poctReport/patientAdditional',
    method: 'post',
    data
  })
}
export function openWindows(patientId, reportId) {
  // window.open('http://ihealth.poctip.com/toPdf2.html?patientId=' + data.id + '&reportId=' + data.reportId)
  return request({
    url: 'sysAdmin/api/ihealth/getReportUrl?patientId=' + patientId + '&reportId=' + reportId,
    method: 'get'
  })
}

export default { add, edit, getIhealth, addReportExt, openWindows, patientAdditional }
