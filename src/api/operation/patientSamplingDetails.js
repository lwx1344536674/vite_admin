import request from '@/utils/request'
// 样本数据（未打包）
export function getSampleDataList(params) {
  return request({
    url: 'sysAdmin/api/patientSampleData/getSampleDataList',
    method: 'get',
    params
  })
}
// 样本打包（生成包数据）
export function samplePackage(data) {
  return request({
    url: 'sysAdmin/api/patientSamplePackage/samplePackage',
    method: 'post',
    data
  })
}
// 分包详情
export function getPackageData(params) {
  return request({
    url: 'sysAdmin/api/patientSampleData/getPackageData',
    method: 'get',
    params
  })
}
// 删除患者采样
export function deleteSampleById(data) {
  return request({
    url: 'sysAdmin/api/patientSampleData/deleteSampleById',
    method: 'post',
    data
  })
}
// 批量/单个 审核
export function checkPatientSampleData(data) {
  return request({
    url: 'sysAdmin/api/patientSampleData/checkPatientSampleData',
    method: 'post',
    data
  })
}
// 样本分装
export function getNoSpiltSampleDataList(params) {
  return request({
    url: 'sysAdmin/api/patientSampleData/getNoSpiltSampleDataList',
    method: 'get',
    params
  })
}

// 样本分装
export function spiltPatientSample(data) {
  return request({
    url: 'sysAdmin/api/patientSampleData/spiltPatientSample',
    method: 'post',
    data
  })
}

export default { getSampleDataList, deleteSampleById, samplePackage, getPackageData, checkPatientSampleData, getNoSpiltSampleDataList, spiltPatientSample }
