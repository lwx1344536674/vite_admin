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
export function updateExclusivePatientProgramme(data) {
  return request({
    url:
            'sysAdmin/api/exclusivePatientProgramme/updateExclusivePatientProgramme',
    method: 'post',
    data
  })
}
export function updateExclusivePatientItem(data) {
  return request({
    url: 'sysAdmin/api/exclusivePatientItem/updateExclusivePatientItem',
    method: 'post',
    data
  })
}
export function getExclusivePatientProgrammeDataDetail(data) {
  return request({
    url:
            'sysAdmin/api/exclusivePatientProgramme/getExclusivePatientProgrammeDataDetail',
    method: 'post',
    data
  })
}

export function generateInterventionPlans(data) {
  return request({
    url: 'sysAdmin/api/exclusivePatientProgramme/generateInterventionPlan',
    method: 'post',
    data
  })
}
export function sendSmsReportLink(params) {
  return request({
    url: 'sysAdmin/api/exclusivePatientProgramme/sendSmsReportLink',
    method: 'post',
    params
  })
}
export function batchDownloadReport(params) {
  return request({
    url: 'sysAdmin/api/exclusivePatientProgramme/batchDownloadReport',
    method: 'post',
    params
  })
}

export default {
  add,
  edit,
  del,
  updateStatus,
  getDetectionData,
  generateInterventionPlan,
  generateInterventionPlans,
  getAllProgrammeAlgorithmList,
  updateExclusivePatientProgramme,
  updateExclusivePatientItem,
  getExclusivePatientProgrammeDataDetail,
  sendSmsReportLink,
  batchDownloadReport
}
