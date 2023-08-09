import request from '@/utils/request'

// 样本打包明细（申请单详情）
export function getPatientSamplePackageDetail(params) {
  return request({
    url: 'sysAdmin/api/patientSamplePackage/getPatientSamplePackageDetail',
    method: 'get',
    params
  })
}
// 样本打包明细（解除申请）
export function cancelPackage(params) {
  return request({
    url: 'sysAdmin/api/patientSamplePackage/cancelPackage',
    method: 'post',
    params
  })
}
// 样本打包明细（解除申请）
export function cancelPackageDetail(params) {
  return request({
    url: 'sysAdmin/api/patientSamplePackage/cancelPackageDetail',
    method: 'get',
    params
  })
}
// 样本打包明细（发送邮件）
export function sendLaboratoryEmail(params) {
  return request({
    url: 'sysAdmin/api/patientSamplePackage/sendLaboratoryEmail',
    method: 'get',
    params
  })
}

export default { getPatientSamplePackageDetail, cancelPackage, cancelPackageDetail, sendLaboratoryEmail }
