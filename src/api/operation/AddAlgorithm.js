import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'sysAdmin/api/programmeAlgorithm/addProgrammeAlgorithm',
    method: 'post',
    data
  })
}
export function edit(data) {
  return request({
    url: 'sysAdmin/api/programmeAlgorithm/updateProgrammeAlgorithm',
    method: 'post',
    data
  })
}
export function del(data) {
  return request({
    url: 'sysAdmin/api/saleTask/delete',
    method: 'post',
    data
  })
}

export function updateStatus(id, status) {
  return request({
    url: `sysAdmin/api/programmeAlgorithm/updateStatus?id=${id}&status=${status}`,
    method: 'post'
  })
}
export function getDetectionData(params) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/getDetectionData',
    method: 'get',
    params
  })
}

export function upload(data) {
  return request({
    url: 'sysAdmin/api/programmeAlgorithm/uploadProgrammeAlgorithmCodeFile',
    method: 'post',
    data
  })
}

export function getDetectionRegListByCode(params) {
  return request({
    url: 'sysAdmin/api/detectionReg/getDetectionRegListByCode',
    method: 'get',
    params
  })
}

export default { add, edit, del, updateStatus, getDetectionData, upload, getDetectionRegListByCode }
