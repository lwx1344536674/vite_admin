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

export function updateStatus(data) {
  return request({
    url: 'sysAdmin/api/programmeAlgorithm/updateStatus',
    method: 'post',
    data
  })
}
export function getDetectionData(params) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/getDetectionData',
    method: 'get',
    params
  })
}
export function generateInterventionPlan(params) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/generateInterventionPlan',
    method: 'get',
    params
  })
}
export function getAllProgrammeAlgorithmList(params) {
  return request({
    url: 'sysAdmin/api/programmeAlgorithm/getAllProgrammeAlgorithmList',
    method: 'get',
    params
  })
}
export function checkPatientDetectionData(data) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/checkPatientDetectionData',
    method: 'post',
    data
  })
}
export function updatePatientDetectionProgramme(data) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/updatePatientDetectionProgramme',
    method: 'post',
    data
  })
}
// 获取生化单数据
export function getPatientFromData(params) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/getPatientFromData',
    method: 'get',
    params
  })
}

// 获取生化单数据
export function exportPatientDetectionData(params) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/exportPatientDetectionData',
    method: 'get',
    params
  })
}
// 获取生化单数据
export function downloadReport(data) {
  return request({
    url: `sysAdmin/api/patientDetectionProgramme/downloadReport`,
    responseType: 'blob',
    method: 'post',
    data
  })
}
// 获取生化单数据
export function getPatientDetectionProgrammeReport(params) {
  return request({
    url: `sysAdmin/api/patientDetectionProgramme/getPatientDetectionProgrammeReport`,
    method: 'get',
    params
  })
}
// 获取干预方案
export function downloadInterventionPlanPdf(data) {
  return request({
    url: `sysAdmin/api/patientDetectionProgramme/downloadInterventionPlanPdf`,
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 获取生化单
export function downloadBiochemicalSinglePdf(data) {
  return request({
    url: `sysAdmin/api/patientDetectionProgramme/downloadBiochemicalSinglePdf`,
    method: 'post',
    responseType: 'blob',
    data
  })
}

export default {
  add,
  edit,
  del,
  updateStatus,
  getDetectionData,
  generateInterventionPlan,
  getAllProgrammeAlgorithmList,
  checkPatientDetectionData,
  updatePatientDetectionProgramme,
  getPatientFromData,
  downloadReport,
  getPatientDetectionProgrammeReport,
  downloadInterventionPlanPdf,
  downloadBiochemicalSinglePdf
}
