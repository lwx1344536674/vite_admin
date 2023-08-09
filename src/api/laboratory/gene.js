import request from '@/utils/request'
// 下载报告
export function downloadGeneticDetectionReport(params) {
  return request({
    url: 'sysAdmin/api/geneSampleData/downloadGeneticDetectionReport',
    method: 'get',
    params
  })
}
export function deleteById(id) {
  return request({
    url: 'sysAdmin/api/geneSampleData/deleteById?id=' + id,
    method: 'post'
  })
}
// 预览报告
export function previewGeneticDetectionReport(params) {
  return request({
    url: 'sysAdmin/api/geneSampleData/previewGeneticDetectionReport',
    method: 'get',
    responseType: 'blob',
    params
  })
}
// 批量发送
export function batchSendSms(params) {
  return request({
    url: 'sysAdmin/api/geneSampleData/batchSendSms',
    method: 'post',
    params
  })
}// 批量发送
export function sendSms(params) {
  return request({
    url: 'sysAdmin/api/geneSampleData/sendSms',
    method: 'post',
    params
  })
}
export default { downloadGeneticDetectionReport, deleteById, previewGeneticDetectionReport, batchSendSms, sendSms }
