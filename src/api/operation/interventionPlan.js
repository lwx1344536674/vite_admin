import request from '@/utils/request'

export function getDetectionProgramme(params) {
  return request({
    url: 'sysAdmin/api/patientDetectionProgramme/getDetectionProgramme',
    method: 'get',
    params
  })
}
export function previewInterventionPlan(params) {
  return request({
    url: 'sysAdmin/api/exclusivePatientProgramme/previewInterventionPlan',
    method: 'get',
    responseType: 'blob',
    params
  })
}

export default { getDetectionProgramme, previewInterventionPlan }
