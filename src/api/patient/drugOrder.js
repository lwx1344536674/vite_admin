import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'patient/admin/drugOrder/add',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'patient/admin/drugOrder/modify',
    method: 'post',
    data
  })
}

// 发起计费
export function launch(id) {
  return request({
    url: 'patient/admin/drugOrder/launch',
    method: 'post',
    data: id
  })
}
/* 推送订单*/
export function pushOrder(data) {
  return request({
    url: 'patient/admin/drugOrder/pushOrder',
    method: 'post',
    data
  })
}

export function upOrDown(drugOrderId, operType) {
  return request({
    url: 'patient/admin/drugOrder/getDrugOrder?drugOrderId=' + drugOrderId + '&operType=' + operType,
    method: 'get'
  })
}
export function getDrugList(patientId) {
  return request({
    url: 'patient/admin/drug/drugList?patientId=' + patientId + '&page=' + 1 + '&size=' + 10,
    method: 'get'
  })
}
export default { add, edit, launch, upOrDown, pushOrder, getDrugList }
