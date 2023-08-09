import request from '@/utils/request'

export function getDataHandlerList(params) {
  return request({
    url: 'user/admin/ocr/getDataHandlerList',
    method: 'get',
    params
  })
}
export function getCountUnallocated(params) {
  return request({
    url: 'user/admin/ocr/getCountUnallocated',
    method: 'get',
    params
  })
}
export function assignedTask(data) {
  return request({
    url: 'user/admin/ocr/assignedTask',
    method: 'post',
    data
  })
}
export function checkManualReview(data) {
  return request({
    url: 'user/admin/ocr/checkManualReview',
    method: 'post',
    data
  })
}
export function biochemicalSingleList(params) {
  return request({
    url: 'user/admin/ocr/biochemicalSingleList',
    method: 'get',
    params
  })
}
export function searchHospitalTemplateList(params) {
  return request({
    url: 'user/admin/ocr/searchHospitalTemplateList',
    method: 'get',
    params
  })
}
export function addDetectionItemByNameCode(data) {
  return request({
    url: 'user/admin/ocr/addDetectionItemByNameCode',
    method: 'post',
    data
  })
}
export function saveBiochemicalSingleData(data) {
  return request({
    url: 'user/admin/ocr/saveBiochemicalSingleData',
    method: 'post',
    data
  })
}
export function getHandleDataList(data) {
  return request({
    url: 'user/admin/ocr/getHandleDataList',
    method: 'get',
    data
  })
}
// 获取待处理或已处理任务数据
export function getMyTaskList(data) {
  return request({
    url: 'user/admin/ocr/getMyTaskList',
    method: 'get',
    data
  })
}

export default {
  getDataHandlerList,
  getCountUnallocated,
  assignedTask,
  checkManualReview,
  biochemicalSingleList,
  searchHospitalTemplateList,
  addDetectionItemByNameCode,
  saveBiochemicalSingleData,
  getHandleDataList,
  getMyTaskList
}
