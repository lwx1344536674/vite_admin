import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/detectionReg/save',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'sysAdmin/api/detectionReg/update',
    method: 'post',
    data
  })
}

export function getByServicePackageId(id) {
  return request({
    url: 'sysAdmin/api/detectionReg/getByServicePackageId?servicePackageId=' + id,
    method: 'get'
  })
}

export function getAdditionalDetection(patientId, reportId) {
  return request({
    url: 'sysAdmin/api/detectionReg/getAdditionalDetection?patientId=' + patientId + '&reportId=' + reportId,
    method: 'get'
  })
}

export function getDetectionRegList() {
  return request({
    url: 'sysAdmin/api/detectionReg/getDetectionRegList',
    method: 'post'
  })
}
export default { add, edit, getByServicePackageId, getAdditionalDetection, getDetectionRegList }
